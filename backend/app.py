from flask import Flask
from flask_cors import CORS

from models import db
from schemas import ma
from views import venue, review

from flask_session import Session
from redis import Redis


app = Flask(__name__)
# app.config.from_object(settings.Dev)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123123@localhost/map'
# app.config['SESSION_TYPE'] = 'redis'
# app.config['SESSION_REDIS'] = Redis(host='127.0.0.1', db=8)
# Session(app)

db.init_app(app)
ma.init_app(app)
CORS(app)

@app.route('/')
def index():
    return "Hello World!"

app.register_blueprint(venue.blue, url_prefix='/venue')
app.register_blueprint(review.blue, url_prefix='/review')


if __name__ == '__main__':    
    app.run()