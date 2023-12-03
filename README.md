# CS467-Animal-Adoption
Dating app for animal adoption - group project for CS467.

## How to run application locally
We have encountered local development issues on Mac devices, and any other troubleshooting will need to be done on an individual basis. 
The best way to see our site is to visit it hosted worldwide on Heroku at https://swipe4pets-844a31ed9224.herokuapp.com/ !

If you wish to view the code locally, proceed with the instructions below:

Prerequisites:
To run Flask you will need to have a recent version of Python installed on your device.
Information on Python installation can be found here: https://www.python.org/

To run React, you will need a recent version of Node installed on your device.
Information on Node installation can be found here: https://nodejs.org/

You will need a code editor such as Visual Studio, VS Code, etc., or know-how of how to run git commands/terminal commands on your own setup, to clone the repo and run the code.

Successful local development relies on environment variables to be fed to the application that supply the database credentials and Amazon S3 credentials (for the image storage service).
As these credentials are private, running this locally will not work without a .env file that supplies these environment variables. This file will be made available to TA's/instructors of the CS467 course at Oregon State University, but does not come preloaded in this repo. 

For those who have been provided with the .env file, installation instructions can be found below:

1. Clone the repo to your local machine.
2. Place a copy of the .env file into the main folder for the application, like so:
  ![image](https://github.com/schmkelsosu/CS467-Animal-Adoption/assets/81319683/bf0a0686-5ab3-42fe-97f3-43c8efab4577)
3. You may wish to use a virtual environment to have a clean installation. This is recommended for best results, but you can also download the needed packages to your local environment as well.
   Instructions for creating/activating a virtual environment can be found here: https://docs.python.org/3/library/venv.html
4. In a terminal in the main folder of the project, update pip with the command:
   **python -m pip install -U pip**
   ![image](https://github.com/schmkelsosu/CS467-Animal-Adoption/assets/81319683/ad533af7-e241-472f-946b-2c08145ef2a3)
6. In the same terminal, download the required python extension with the command:
   **pip install -r requirements.txt**
   ![image](https://github.com/schmkelsosu/CS467-Animal-Adoption/assets/81319683/c2e91595-3728-458b-a975-054b61ce691d)
7. In the same terminal, go into the **backend** folder with the command:
   **cd backend**
   ![image](https://github.com/schmkelsosu/CS467-Animal-Adoption/assets/81319683/a2c8374a-55f9-4c18-b4fc-0092e5d51f68)
9. In the same terminal, run the command:
   **flask run**
   ![image](https://github.com/schmkelsosu/CS467-Animal-Adoption/assets/81319683/30d05135-6b19-4178-996e-c1b09d751290)
10. If successful, you should see the server start, and the app will be running on http://127.0.0.1:5000/


 
