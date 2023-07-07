import logging
import functions_framework

from cors import cors_enabled
from errors import clean_errors
from forms import ContactForm, SubscribeForm
from mailchimp import add_or_update_subscriber
from mailgun import forward_contact_email


logger = logging.getLogger(__name__)

INVALID_METHOD_RESPONSE = {"nonFieldErrors": "Method Not Allowed. Try 'POST'."}


@functions_framework.http
@cors_enabled
def contact(request):
    """Forwards a message to an octue email address
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    form = ContactForm(meta={"csrf": False})
    if request.method != "POST":
        return INVALID_METHOD_RESPONSE, 405

    if form.validate_on_submit():
        try:
            response = forward_contact_email(
                form.data["firstName"],
                form.data["lastName"],
                form.data["email"],
                form.data["message"],
            )
            response.raise_for_status()
            logger.info("Sent contact form request via mailgun")

        # Blanket exception because we don't want to show internal errors to customers
        # pylint: disable-next=bare-except
        except:
            # Log the form data so it's retrievable
            logger.exception("An error occurred. Form data was: %s", form.data)

        return form.data, 200

    else:
        return clean_errors(form.errors), 400


@functions_framework.http
@cors_enabled
def subscribe(request):
    """Subscribes a user to the main mailchimp list
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    form = SubscribeForm(meta={"csrf": False})

    if request.method != "POST":
        return INVALID_METHOD_RESPONSE, 405

    if form.validate_on_submit():
        try:
            add_or_update_subscriber(form.data["email"])
            logger.info("Added / updated subscriber in mailchimp")

        # Blanket exception because we don't want to show internal errors to customers
        # pylint: disable-next=bare-except
        except:
            # Log the form data so it's retrievable
            logger.exception("An error occurred. Form data was: %s", form.data)

        return form.data, 200

    else:
        return clean_errors(form.errors), 400
