from os import environ
import logging
from datetime import datetime
from hubspot3 import Hubspot3
from hubspot3.crm_associations import Definitions as AssociationDefinitions


logger = logging.getLogger(__name__)


HUBSPOT_API_KEY = environ.get("HUBSPOT_API_KEY", None)
if HUBSPOT_API_KEY is None:
    raise ValueError("Attempted to start the HubSpot client but no api key given. Generate an api key over at hubspot, then add it to the function as an environment variable (config var on heroku).")


# TODO Subscribing to a paid hubspot package allows us to automate ticket assignation, which is what should be done
#  in the future, but for now I don't want to pay £66/month just to receive an email notification (by default, nobody
#  gets notified when a ticket is created unless it's assigned).
# TODO Add a drop down that would allow us to assign different tickets to different pipelines
# To display ticket owner ids while setting this up, use the print_owner_ids() function below
TICKET_OWNER_IDS = {
    'Support Pipeline': environ.get("SUPPORT_PIPELINE_TICKET_OWNER_ID")
}

client = Hubspot3(api_key=HUBSPOT_API_KEY)


def print_owner_ids():
    """ Lists owner ids by email address so you can configure the ticket owner ids above.

    Note: We could indicate pipeline owners by email address. But we'd then have to make this call as part of the form
    submission, so it would add an extra round trip to the hubspot API during each submission.
    """
    print(dict((owner["email"], owner["ownerId"]) for owner in client.owners.get_owners()))


def initialise():
    """ Initialise key variables used to create tickets and manage contacts in hubspot
    :return: (support_pipeline, support_stage, subscription_statuses)
    """

    support_pipeline = None
    support_stage = None
    subscription_statuses = None

    try:
        # List of available email subscription types from hubspot
        subscription_types = client.email_subscription.get_subscription_types()
        subscription_statuses = [
            {"id": definition["id"], "subscribed": True, "optState": "OPT_IN"}
            for definition in subscription_types["subscriptionDefinitions"]
        ]

        # Get the support pipeline to add 'contact' tickets to
        ticket_pipelines = client.crm_pipelines.get_all(object_type="tickets")
        support_pipeline = None
        for pipeline in ticket_pipelines:
            if pipeline["label"] == "Support Pipeline":
                support_pipeline = pipeline["pipelineId"]
                # Sigh. Stages aren't ordered by display order.
                for stage in pipeline["stages"]:
                    if stage['displayOrder'] == 0:
                        support_stage = stage["stageId"]

        if support_pipeline is None:
            raise Exception('Cannot get "Support Pipeline" from hubspot. Check your support ticket pipelines and create this one if necessary.')

    except Exception as e:

        logger.error(
            "Error initialising connection to HubSpot CRM. Perhaps you have no internet connection? Error was %s",
            getattr(e, "message", "unknown"),
        )

        raise

    return support_pipeline, support_stage, subscription_statuses


support_pipeline, support_stage, subscription_statuses = initialise()


def create_or_update_contact(email, first_name, last_name):
    """ Get a contact from hubspot, updating their name. If the contact don't exist, create them.
    """

    contact = client.contacts.create_or_update_by_email(email, data={
        "properties": [
            {
                "property": "email",
                "value": email,
            },
            {
              "property": "firstname",
              "value": first_name
            },
            {
              "property": "lastname",
              "value": last_name
            },
        ]
    })

    return contact


def subscribe_contact(email):
    """ Subscribe a contact to all of the email subscription types
    :param email:
    :return:
    """
    client.email_subscription.update_subscriptions(
        email,
        subscriptions=subscription_statuses,
        portalSubscriptionLegalBasis="LEGITIMATE_INTEREST_CLIENT",
        portal_legal_basis_explanation="Clicked subscribe on octue.com on {}".format(datetime.utcnow()),
    )


def create_ticket(message, subject, contact):
    """ Create a support ticket associated to a contact
    :param message:
    :param subject:
    :param contact:
    :return:
    """

    ticket_owner_id = TICKET_OWNER_IDS["Support Pipeline"]

    ticket = client.tickets.create(
        pipeline=support_pipeline, stage=support_stage, properties={"subject": subject, "content": message, "hubspot_owner_id": ticket_owner_id}
    )

    if contact is not None:
        client.crm_associations.create(
            from_object=ticket["objectId"],
            to_object=contact["vid"],
            definition=AssociationDefinitions.TICKET_TO_CONTACT,
        )
