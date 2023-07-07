from os import environ
import requests

RECIPIENTS_LIST = ["support@octue.com"]

MAILGUN_API_KEY = environ.get("MAILGUN_API_KEY", None)
MAILGUN_SENDER_DOMAIN = environ.get("MAILGUN_SENDER_DOMAIN", "mg.octue.com")
MAILGUN_API_URL = environ.get("MAILGUN_API_URL", "https://api.mailgun.net/v3")

if MAILGUN_API_KEY is None:
    raise ValueError("MAILGUN_API_KEY must be set.")


def forward_contact_email(firstName, lastName, email, message):
    """Forward a contact form submission to the Octue support team, using mailgun"""
    return requests.post(
        f"{MAILGUN_API_URL}/{MAILGUN_SENDER_DOMAIN}/messages",
        auth=("api", MAILGUN_API_KEY),
        timeout=5,
        data={
            "from": "Octue Website (planex-site) <noreply@octue.com>",
            "to": RECIPIENTS_LIST,
            "subject": "Contact Form Submission",
            "text": f"""
Message from: {firstName} {lastName} ({email})
Message Contents:
-----------------
{message}
""",
        },
    )
