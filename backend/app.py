from flask import Flask, send_from_directory, request, Response, render_template, json, redirect
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os
import helpers
import constants

# DO NOT CHANGE SECTION BELOW
# ____________________________________

# load environment settings
load_dotenv()

# set up app
app = Flask(__name__, static_folder="../swipe4pets/build", static_url_path="/")
cors= CORS(app)

# use loaded environment settings in app
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

# allows connection cursor to function properly
app.config['MYSQL_CURSORCLASS'] = "DictCursor"

# start mySQL connection
mysql = MySQL(app)

# ____________________________________
# DO NOT CHANGE SECTION ABOVE

# for testing, "proxy" in the swipe4pets folder's package.json file needs to be changed to "http://127.0.0.1:5000"
# this needs to be changed back to "https://swipe4pets-844a31ed9224.herokuapp.com/" when finished for the live site!

# example SQL call, and test for successful environment variable retrieved
@app.route('/api', methods=["GET", "POST"])
@cross_origin()
def index():
    query = "SELECT * FROM animal_gender;"
    cur = mysql.connection.cursor()
    cur.execute(query)
    results = cur.fetchall()
    return {
        "backend": "Flask Backend is active!",
        "pet_gender": str(results[1])
    }


# Shelter methods
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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
@cross_origin()
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


# Adopter methods
@app.route('/adopterUser/<int:adopter_id>', methods=["GET"])
def getAdopterUserById(adopter_id: int):
    """
    Returns the adopter user account associated with given adopter_id.
    """
    query = "SELECT " + str(adopter_id) + " FROM adopter;"
    cur = mysql.connection.cursor()
    cur.execute(query)
    results = cur.fetchall()
    if result:
        return results, 200
    else:
        return jsonify({'error': 'Item not found'}), 404

@app.route('/adopterUser', methods=["POST"])
def createAdopterUser():
    """
    Creates a new adopter user account.

    Returns success code if account is successfully created.
    """
 
    req = request.args.to_dict()
    invalid_params = helpers.get_invalid_params(
        req.keys(), constants.CREATE_ADOPTER_REQUEST_PARAMS
    )
    if len(invalid_params) > 0:
        error_msg = helpers.create_invalid_parameters_error_message(
            invalid_params
        )
        return Response(
            error_msg,
            400
        )
    firstName = req["firstName"]
    lastName = req["lastName"]
    email = req["email"]
    phoneNumber = req["phoneNumber"]
    addressLine1 = req["addressLine1"]
    addressLine2 = req["addressLine2"]
    city = req["city"]
    state = req["state"]
    zip = req["zip"]

    # TO-DO: add functions to create profile [assign ID, store password]
    return {
        "adopterUserAPI": "POST - createAdoptionUser still in progress, not available at this time"
    }

@app.route('/adopterUser/<int:adopter_id>', methods=["PUT"])
def updateAdopterUser():
    """
    Edits the adopter account associated with given adopter_user_id.
    """
    return {
        None
    }

@app.route('/adopterUser/<int:adopter_id>', methods=["DELETE"])
def deleteAdopterUser():
    """
    Deletes adopter user
    """
    return {
        None
    }

# ------------------------------don't touch below here!-----------------------------------------

# serve index.html for React rendering
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


# catch 404 errors, allows us to refresh any main page and have it rendered
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run()