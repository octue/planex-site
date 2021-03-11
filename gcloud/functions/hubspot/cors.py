from os import environ


# By allowing this to be overridden by the environment, I can temporarily set it to "*" in order to do end-to-end
# testing - this is useful when first getting started; but you'll want to close down that overly-permissive policy
# once your system is running.
# If I need to check the cors policies are working, I deploy a site to preview.octue.com before actually rolling it
# out to www.octue.com.
ACCESS_CONTROL_ALLOW_ORIGIN = environ.get("ACCESS_CONTROL_ALLOW_ORIGIN", "*.octue.com")


def cors_enabled(func):
    """ Decorator to explicitly define a Cross Origin Resource Sharing policy

    From https://cloud.google.com/functions/docs/writing/http#handling_http_methods

    For more information about CORS and CORS preflight requests, see:
    https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request

    Important note: allowing only certain domains in the Access-Control-Allow-Origin header does not mean that other
     domains cannot trigger a method on this endpoint (e.g. REST API method). It just means that disallowed origins
     cannot use the result in javascript (browser ensures this). For restricting access to an endpoint for specific
     domains use a server-side request filter that e.g. returns HTTP 401 for disallowed domains.

    :param func: The function to wrap, which should accept func(request) and return (data, status_code, headers)
    :return: decorated function
    """

    def wrapper(request):

        # Respond to preflight requests automatically
        if request.method == 'OPTIONS':
            # Allows GET requests from any origin with the Content-Type
            # header and caches preflight response for an 3600s
            headers = {
                'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN,
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '3600'
            }

            return '', 204, headers

        # Execute the main request and add CORS headers
        headers = {'Access-Control-Allow-Origin': ACCESS_CONTROL_ALLOW_ORIGIN}

        return (*func(request), headers)

    return wrapper
