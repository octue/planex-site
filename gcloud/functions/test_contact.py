import requests


def test_contact():
    """Test that the contact function works as expected
    :return:
    """
    data = {
        "email": "me@octue.com",
        "firstName": "Me",
        "lastName": "Octue",
        "message": "Hello",
    }
    response = requests.post("http://127.0.0.1:8080", data=data, timeout=5)
    response.raise_for_status()


test_contact()
