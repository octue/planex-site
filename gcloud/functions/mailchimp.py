import requests
from os import environ
import hashlib


# Get list ids:
#     resp = requests.get(
#         f"{MAILCHIMP_BASE_URL}/lists", auth=("apikey", MAILCHIMP_API_KEY)
#     )
#     resp.raise_for_status()
#     print(resp.json()['lists'][0]['id'])
MAILCHIMP_LIST_IDS = {
    "Octue Newsletter": "cf71ac7a6b",
}
MAILCHIMP_LIST_ID = MAILCHIMP_LIST_IDS["Octue Newsletter"]

MAILCHIMP_API_KEY = environ.get("MAILCHIMP_API_KEY", None)
MAILCHIMP_SERVER_DOMAIN = environ.get("MAILCHIMP_SERVER_DOMAIN", "us21")
MAILCHIMP_BASE_URL = f"https://{MAILCHIMP_SERVER_DOMAIN}.api.mailchimp.com/3.0"

if MAILCHIMP_API_KEY is None:
    raise ValueError("The MAILCHIMP_API_KEY must be set.")


def add_or_update_subscriber(email):
    """Add a subscriber to the main mailchimp list, o if they're already present, update their status to 'subscribed'"""

    endpoint = (
        f"{MAILCHIMP_BASE_URL}/lists/{MAILCHIMP_LIST_ID}/members/{_email_hash(email)}"
    )
    data = {
        "email_address": email,
        "status_if_new": "subscribed",
        "status": "subscribed",
    }
    headers = {
        "Authorization": f"apikey {MAILCHIMP_API_KEY}",
        "Content-Type": "application/json",
    }

    response = requests.put(endpoint, json=data, headers=headers, timeout=5)
    response.raise_for_status()


def _email_hash(email):
    """Generate an MD5 hash of an email address, which is required by the Mailchimp API for identifying the member in the list."""
    return hashlib.md5(email.encode("utf-8")).hexdigest()
