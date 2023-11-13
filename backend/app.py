from flask import Flask, request, Response
import helpers
import constants

import time

app = Flask(__name__)

@app.route('/api', methods=["GET", "POST"])
def index():
    return {
        "backend": "Flask Backend is active!"
    }

# Shelter methods
@app.route('/shelterUser', methods=["GET"])
def getShelterUsers():
    """
    Returns all shelter user accounts and account information.
    """
    return {
        "shelterUserAPI": "GET - getShelterUsers not available at this time"
    }

@app.route('/shelterUser/<int:shelter_id>', methods=["GET"])
def getShelterUserById(shelter_id: int):
    """
    Returns the shelter user account associated with given shelter_id.
    """
    return {
        "shelterUserAPI": "GET - getShelterUserById not available at this time"
    }

@app.route('/shelterUser', methods=["POST"])
def createShelterUser():
    """
    Creates a new shelter user account given the request information after
    parsing request to ensure required information was provided.

    Returns the newly created shelter user account.
    """
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_SHELTER_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = "The following invalid parameter(s) were provided:"
        for param in invalid_params:
            error_msg = error_msg + ' ' + param + ','
        error_msg = error_msg.rstrip(error_msg[-1])
        return Response(
            error_msg,
            400
        )
    return {
        "shelterUserAPI": "POST - createShelterUser not available at this time"
    }

@app.route('/shelterUser', methods=["PUT"])
def updateShelterUser():
    """
    Updates the shelter account associated with given shelter_user_id with
    provided information.

    Returns the shelter user account.
    """
    return {
        "shelterUserAPI": "PUT - updateShelterUser not available at this time"
    }

@app.route('/animal', methods=["POST"])
def createAnimal():
    """
    Creates an animal object with given information and persists to database.

    Returns the animal object.
    """
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ANIMAL_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = "The following invalid parameter(s) were provided:"
        for param in invalid_params:
            error_msg = error_msg + ' ' + param + ','
            error_msg = error_msg.rstrip(error_msg[-1])
        return Response(
            error_msg,
            400
        )
    return {
        "animalAPI": "PUT - createAnimal not available at this time"
    }

@app.route('/animal', methods=["GET"])
def getAnimal():
    """
    Returns all animals persisted in database if ID is not given.
    If animal_id is given, returns the animal associated with that ID.
    If shelter_id is given, returns all animals associated with that ID.
    """
    return {
        "animalAPI": "GET - getAnimal not available at this time"
    }

@app.route('/animal', methods=["PUT"])
def updateAnimal():
    """
    Updates animal associated with given id with given animal information
    """
    return {
        "animalAPI": "PUT - updateAnimal not available at this time"
    }


if __name__ == "__main__":
    app.run()
