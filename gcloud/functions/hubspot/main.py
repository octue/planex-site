import logging
from forms import ContactForm, SubscribeForm
from hubspot import create_ticket, get_or_create_contact, subscribe_contact, update_user_name
from cors import cors_enabled
from errors import clean_errors


logger = logging.getLogger(__name__)

INVALID_METHOD_RESPONSE = {
    "non_field_errors": "Method Not Allowed. Try 'POST'."
}


@cors_enabled
def contact(request):
    """Creates a 'contact' type support request in HubSpot
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    form = ContactForm(meta={'csrf': False})
    if request.method != 'POST':
        return INVALID_METHOD_RESPONSE, 405

    if form.validate_on_submit():
        try:
            contact, created = get_or_create_contact(form.email)
            update_user_name(form.email, form.first, form.last)
            create_ticket(form.message, "Octue contact form submission", contact)

        except:
            # Blanket exception because we don't want to show internal errors to customers
            # Log the form data so it's retrievable
            logger.exception(f"An error occurred. Form data was: {form.data}")

        return form.data, 200

    else:
        return clean_errors(form.errors), 400


@cors_enabled
def subscribe(request):
    """Subscribes a user to the mailing list in HubSpot
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """

    form = SubscribeForm(meta={'csrf': False})

    if request.method != 'POST':
        return INVALID_METHOD_RESPONSE, 405

    if form.validate_on_submit():
        try:
            get_or_create_contact(form.email)
            subscribe_contact(form.email)

        except:
            # Blanket exception because we don't want to show internal errors to customers
            # Log the form data so it's retrievable
            logger.exception(f"An error occurred. Form data was: {form.data}")

        return form.data, 200

    else:
        return clean_errors(form.errors), 400
