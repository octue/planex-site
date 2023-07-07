import requests


def test_subscribe():
    """Test that the subscribe function works as expected
    :return:
    """
    email = "you@octue.com"
    response = requests.post("http://127.0.0.1:8080", data={"email": email}, timeout=5)
    response.raise_for_status()


test_subscribe()
