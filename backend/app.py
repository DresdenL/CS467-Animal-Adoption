from flask import Flask
import time

app = Flask(__name__)

@app.route('/api', methods=["GET", "POST"])
def index():
    return {
        "backend": "Flask Backend is active!"
    }


if __name__ == "__main__":
    app.run()
