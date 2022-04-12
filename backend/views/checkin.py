import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import uuid
from flask import Blueprint, jsonify, request
from cache.checkin import check_in, create_checkin
from broker.checkin import create_checkin_queue, create_dead_queue
from models.checkin import db, Checkin
from schemas.checkin import checkin_schema, checkins_schema


blue = Blueprint('checkin', __name__)

@blue.route('/', methods=['GET'])
def get_new():
    return "Start"

@blue.route('/get', methods=['GET'])
def get_reviews():
    return "get"

@blue.route('/get/<id>', methods=['GET'])
def get_reviews_venue(id):
    return id
  
@blue.route('/check', methods=['GET', 'POST'])
def check():
  result = { 'status': 200, 'message': '' }
  user_id = request.args.get('user_id')
  venue_id = request.args.get('venue_id')
  checkin_id = uuid.uuid1()
  checkin_info = {
    "user_id": user_id,
    "venue_id": venue_id,
    "checkin_id": str(checkin_id)
  }
  flag = check_in(venue_id, 15)
  if flag:
    try:
      create_checkin(checkin_info)
      create_checkin_queue(checkin_info)
      create_dead_queue(checkin_info)
      result['checkin_info'] = checkin_info
      result['status'] = 200
      result['message'] = 'Check in success'
      print(result['message'])
      return jsonify(result)
    except Exception as e:
      result['status'] = 400
      result['message'] = 'Session time expired'
      print(result['message'])
      return jsonify(result)
  else:
    result['status'] = 201
    result['message'] = 'No available seats'
    print(result['message'])
    return jsonify(result) 