from flask import Blueprint, request, jsonify
from models import db, Venue
from schemas import venue_schema, venues_schema


blue = Blueprint('venue', __name__)

@blue.route('/add', methods=['POST'])
def add_venue():
    name = request.json['name']
    description = request.json['description']  
    latitude = request.json['latitude']
    longitude = request.json['longitude']
    image_num = request.json['image_num']
    venue = Venue(name, description, latitude, longitude, image_num)
    db.session.add(venue)
    db.session.commit() 
    return venue_schema.jsonify(venue)

@blue.route('/get', methods=['GET'])
def get_venues():
    venues = Venue.query.all()
    results = venues_schema.dump(venues)
    return jsonify(results)

@blue.route('/get/<id>', methods=['GET'])
def get_venue(id):
    venue = Venue.query.get(id)
    result = venue_schema.jsonify(venue)
    return result

@blue.route('/get/last', methods=['GET'])
def get_venue_last():
    venue = Venue.query.get(id)
    result = venue_schema.jsonify(venue)
    return result

@blue.route('/update/<id>', methods=['PUT'])
def update_venue(id):
    venue = Venue.query.get(id)
    name = request.json['name']
    description = request.json['description']  
    venue.name = name
    venue.description = description
    db.session.commit()
    result = venue_schema.jsonify(venue)
    return result

@blue.route('/upload/<id>', methods=['PUT'])
def upload_venue(id):
    venue = Venue.query.get(id)
    image_num = request.json['image_num']  
    venue.image_num = image_num
    db.session.commit()
    result = venue_schema.jsonify(venue)
    return result

@blue.route('/delete/<id>', methods=['DELETE'])
def delete_venue(id):
    venue = Venue.query.get(id)
    db.session.delete(venue)
    db.session.commit()
    result = venue_schema.jsonify(venue)
    return result