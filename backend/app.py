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
        "MySQL Results": str(results[0]),
        "os stuff": os.getenv("MYSQL_HOST")
    }


# Shelter methods
@app.route('/shelterUser', methods=["GET"])
def getShelterUsers():
    """
    Returns all shelter user accounts and account information.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: grab all rows from the shelter account table in MySQL db
    # TO-DO: return all shelter accounts
    return {
        "shelterUserAPI": "GET - getShelterUsers not available at this time"
    }

@app.route('/shelterUser/<int:shelter_id>', methods=["GET"])
def getShelterUserById(shelter_id: int):
    """
    Returns the shelter user account associated with given shelter_id.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: grab shelter user row from shelter user table where shelter_id = given shelter ID
    # TO-DO: return shelter user
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
    # TO-DO: parse query for any missing parameters and return appropriate error if applicable
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
    # TO-DO: persist new shelter user in shelter user table in database
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
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: parse query for any missing required parameters and return appropriate error if applicable
    # (required parameters: shelter_id + at least 1 field to update)
    # TO-DO: update shelter user in database with new values and return updated shelter user
    return {
        "shelterUserAPI": "PUT - updateShelterUser not available at this time"
    }

@app.route('/shelterUser', methods=["DELETE"])
def deleteShelterUser():
    """
    Deletes shelter user and all dependent object
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: delete shelter account object in database and all dependent objects (including animals)
    return {
        "animalAPI": "DELETE - deleteShelterUser not available at this time"
    }

@app.route('/animal', methods=["POST"])
def createAnimal():
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
        error_msg = "The following invalid parameter(s) were provided:"
        for param in invalid_params:
            error_msg = error_msg + ' ' + param + ','
        error_msg = error_msg.rstrip(error_msg[-1])
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
def getAnimal():
    """
    Returns all animals persisted in database if ID is not given.
    If animal_id is given, returns the animal associated with that ID.
    If shelter_id is given, returns all animals associated with that ID.
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: query database for all animals in animal table and return the list
    return {
        "animalAPI": "GET - getAnimal not available at this time"
    }

@app.route('/animal', methods=["PUT"])
def updateAnimal():
    """
    Updates animal associated with given id with given animal information
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: parse query for any missing required parameters and return appropriate error if applicable
    # (required: animal_id + at least 1 field to update)
    # TO-DO: update animal object in database with new values
    return {
        "animalAPI": "PUT - updateAnimal not available at this time"
    }

@app.route('/animal', methods=["DELETE"])
def deleteAnimal():
    """
    Deletes animal
    """
    # TO-DO: parse query for any invalid parameters and return appropriate error if applicable
    # TO-DO: delete animal object in database and all dependent objects
    return {
        "animalAPI": "DELETE - deleteAnimal not available at this time"
    }



if __name__ == "__main__":
    app.run()
