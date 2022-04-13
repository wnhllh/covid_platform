from flask import Flask
from flask_cors import CORS

from models import db
from schemas import ma
from views import venue, review, user

import settings


app = Flask(__name__)
app.config.from_object(settings.Dev)


db.init_app(app)
ma.init_app(app)
CORS(app)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/create_db')
def create_db():
    db.create_all()
    return "Succeed, Creating Database!"

@app.route('/delete_db')
def drop_db():
    db.drop_all()
    return "Succeed, Dropping Database!"


app.register_blueprint(venue.blue, url_prefix='/venue')
app.register_blueprint(review.blue, url_prefix='/review')
app.register_blueprint(user.blue, url_prefix='/user')

if __name__ == '__main__':    
    app.run()