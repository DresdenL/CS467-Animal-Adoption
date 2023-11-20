from flask import Flask, request, Response, render_template, json, redirect
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os
import helpers
import constants

# load environment settings
load_dotenv()

app = Flask(__name__)

# use loaded environment settings in app
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

# do not change this, allows connection cursor to function properly
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

# start mySQL connection
mysql = MySQL(app)

# example SQL call, and test for successful environment variable retrieved
@app.route('/api', methods=["GET", "POST"])
def index():
    query = "SELECT * FROM animal_gender;"
    cur = mysql.connection.cursor()
    cur.execute(query)
    results = cur.fetchall()
    return {
        "backend": "Flask Backend is active!",
        "MySQL Results": str(results[1]),
        "os stuff": os.getenv("MYSQL_HOST")
    }


# Shelter methods
@app.route('/organizationUser', methods=["GET"])
def get_organization_users():
    """
    Returns all organization user accounts and account information.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: grab all rows from the organization table in MySQL db
    # TO-DO: return all organization accounts
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), []
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    query = "SELECT * FROM organization;"
    return {
        "shelterUserAPI": "GET - getShelterUsers not available at this time"
    }


@app.route('/organizationUser/<int:organization_id>', methods=["GET"])
def get_organization_user_by_id(organization_id: int):
    """
    Returns the organization user account associated with given organization_id.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: grab organization user row from organization table where id = given organization ID
    # TO-DO: return organization user
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), []
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    query = f"SELECT * FROM organization where id={organization_id};"
    return {
        "organizationUserAPI": "GET - getOrganizationUserById not available at this time"
    }


@app.route('/organizationUser', methods=["POST"])
def create_organization_user():
    """
    Creates a new shelter user account given the request information after
    parsing request to ensure required information was provided.

    Returns the newly created organization user account.
    """
    # TO-DO: parse query for any missing parameters and return appropriate error if applicable
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ORGANIZATION_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    id = req["id"]
    display_name = req["display_name"]
    username = req["username"]
    email = req["email"]
    phone_number = req["phone_number"]

    # TO-DO: persist new shelter user in shelter user table in database
    # TO-DO: persist dependent objects/relationships in database (role, address, algorithm, password)
    return {
        "organizationUserAPI": "POST - createOrganizationUser not available at this time"
    }


@app.route('/organizationUser/<int:organization_id>', methods=["PUT"])
def update_organization_user():
    """
    Updates the organization account associated with given organization_id with
    provided information.

    Returns the organization user account.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: parse query for any missing required parameters and return appropriate error if applicable
    # (required parameters: shelter_id + at least 1 field to update)
    # TO-DO: update shelter user in database with new values and return updated organization user
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ORGANIZATION_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    return {
        "organizationUserAPI": "PUT - updateOrganizationUser not available at this time"
    }


@app.route('/organizationUser/<int:organization_id>', methods=["DELETE"])
def delete_organization_user(organization_id: int):
    """
    Deletes organization user and all dependent objects
    """
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), []
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(invalid_params)
        return Response(
            error_msg,
            400
        )
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: delete shelter account object in database and all dependent objects (including animals)
    query = f"DELETE * FROM organization WHERE id={organization_id}"
    return {
        "organizationUserAPI": "DELETE - deleteOrganizationUser not available at this time"
    }


@app.route('/animal', methods=["POST"])
def create_animal():
    """
    Creates an animal object with given information and persists to database.

    Returns the animal object.
    """
    # TO-DO: parse query for any missing required parameters and return appropriate error if applicable
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ANIMAL_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(invalid_params)
        return Response(
            error_msg,
            400
        )
    # TO-DO: persist new animal in database
    # TO-DO: return new animal object
    return {
        "animalAPI": "PUT - createAnimal not available at this time"
    }


@app.route('/animal', methods=["GET"])
def get_animal():
    """
    Returns all animals persisted in database if ID is not given.
    If animal_id is given, returns the animal associated with that ID.
    If organization_id is given, returns all animals associated with that ID.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: query database for all animals in animal table and return the list
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.GET_ANIMAL_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    query = "SELECT * FROM animal;"
    if "animal_id" in req.keys():
        animal_id = req["animal_id"]
        query = f"SELECT * FROM animal where id={animal_id}"
    elif "organization_id" in req.keys():
        organization_id = req["organization_id"]
        query = f"SELECT * FROM animal where organization_id={organization_id}";
    return {
        "animalAPI": "GET - getAnimal not available at this time"
    }


@app.route('/animal/<int:animal_id>', methods=["PUT"])
def update_animal():
    """
    Updates animal associated with given id
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: parse query for any missing required parameters and return appropriate error if applicable
    # (required: animal_id + at least 1 field to update)
    # TO-DO: update animal object in database with new values
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ANIMAL_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(invalid_params)
        return Response(
            error_msg,
            400
        )
    return {
        "animalAPI": "PUT - updateAnimal not available at this time"
    }


@app.route('/animal/<int:animal_id>', methods=["DELETE"])
def delete_animal(animal_id: int):
    """
    Deletes animal associated with given ID
    """
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), []
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(invalid_params)
        return Response(
            error_msg,
            400
        )
    query = f"DELETE FROM animal WHERE id={animal_id};"
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: delete animal object in database and all dependent objects
    return {
        "animalAPI": "DELETE - deleteAnimal not available at this time"
    }


if __name__ == "__main__":
    app.run()
