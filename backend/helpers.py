# helper methods to be used in other files for api handling

def get_invalid_params(params: list, valid_params: list):
    """
    Returns all invalid parameters passed in by user through API call.

    :param params: list of the parameters pass in by user.
    :param valid_params: list of valid parameters that a user can provide.
    """
    invalid_params = []
    for param in params:
        if param not in valid_params:
            invalid_params.append(param)
    return invalid_params