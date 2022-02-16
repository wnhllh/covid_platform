from re import S
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123123@localhost/map'
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

class Venue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text())
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    
    # def __repr__(self):
    #     return f"Venue: {self.name}"
       
    def __init__(self, name, description):
        self.name = name
        self.description = description
        
class Review(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    venue_id = db.Column(db.Integer, primary_key=True)
    # rating = db.Column(db.Integer)
    review = db.Column(db.Text())
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
       
    def __init__(self, user_id, venue_id, review):
        self.user_id = user_id
        self.venue_id = venue_id
        # self.rating = rating
        self.review = review
        

class VenueSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'created_at')
        
class ReviewSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'venue_id', 'review', 'created_at')
        
venue_schema = VenueSchema()
venues_schema = VenueSchema(many=True)

review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)


@app.route('/')
def index():
    return "Hello World!"

@app.route('/venue/add', methods=['POST'])
def add_venue():
    name = request.json['name']
    description = request.json['description']  
    venue = Venue(name, description)
    db.session.add(venue)
    db.session.commit() 
    return venue_schema.jsonify(venue)

@app.route('/venue/get', methods=['GET'])
def get_venues():
    venues = Venue.query.all()
    results = venues_schema.dump(venues)
    return jsonify(results)

@app.route('/venue/get/<id>', methods=['GET'])
def get_venue(id):
    venue = Venue.query.get(id)
    result = venue_schema.jsonify(venue)
    return result

@app.route('/venue/update/<id>', methods=['PUT'])
def update_venue(id):
    venue = Venue.query.get(id)
    name = request.json['name']
    description = request.json['description']  
    venue.name = name
    venue.description = description
    db.session.commit()
    result = venue_schema.jsonify(venue)
    return result

@app.route('/venue/delete/<id>', methods=['DELETE'])
def delete_venue(id):
    venue = Venue.query.get(id)
    db.session.delete(venue)
    db.session.commit()
    result = venue_schema.jsonify(venue)
    return result

@app.route('/review/get', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    results = reviews_schema.dump(reviews)
    return jsonify(results)

@app.route('/review/get/<id>', methods=['GET'])
def get_reviews_venue(id):
    reviews = Review.query.filter_by(venue_id=id).all()
    results = reviews_schema.dump(reviews)
    return jsonify(results)


if __name__ == '__main__':
    app.run()

