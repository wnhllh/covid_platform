from flask import Blueprint, jsonify
from models import db, Review
from schemas import review_schema, reviews_schema


blue = Blueprint('review', __name__)

@blue.route('/get', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    results = reviews_schema.dump(reviews)
    return jsonify(results)

@blue.route('/get/<id>', methods=['GET'])
def get_reviews_venue(id):
    reviews = Review.query.filter_by(venue_id=id).all()
    results = reviews_schema.dump(reviews)
    return jsonify(results)