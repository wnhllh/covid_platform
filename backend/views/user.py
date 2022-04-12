import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from utils.crypt import pwd
from cache.user import save_token, clear_token, get_user_id_by_token

import uuid
from flask import Blueprint, make_response, request, jsonify
from models.user import db, User
from schemas.user import user_schema, users_schema


blue = Blueprint('user', __name__)

@blue.route('/login', methods=['POST'])
def login():
    phone = request.json['phone']
    password = pwd(request.json['password'])
    login_user = User.query.filter_by(phone=phone, password=password).one()
    if login_user:
        # save token
        token = uuid.uuid4().hex
        save_token(token, login_user.id)
        # return
        return make_response(jsonify({'token': token}), 200)
    else:
        # return
        return make_response(jsonify({'message': 'phone or password is wrong'}), 400)
   
   
@blue.route('/logout', methods=['POST'])
def logout():
    token = request.cookies.get('token')
    # delete token
    clear_token(token)
    # delete cookie
    # return
    return make_response(jsonify({'message': 'logout succeed'}), 200)


@blue.route('/modify_password', methods=['POST'])
def modify():
    token = request.cookies.get('token')
    user_id = get_user_id_by_token(token)
    user = User.query.get(int(user_id))
    user.password = pwd(request.json['password'])
    
    
@blue.route('/register', methods=['POST'])
def register():
    pass