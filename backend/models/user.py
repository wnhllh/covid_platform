import datetime
from sqlalchemy import Column, Integer, String, Enum, DateTime, ForeignKey
from models import db


user_role = db.Table('user_role', 
                    Column('user_id', Integer, ForeignKey('user.id', name = 'user_id_fk')), 
                    Column('role_id', Integer, ForeignKey('role.id', name = 'role_id_fk')))


class BaseModel(db.Model):
    __abstract__ = True
    id = Column(Integer, primary_key = True, autoincrement = True)
    name = Column(String(20), unique = True, nullable = False)
        

class Role(BaseModel):
    __tablename__ = 'role'
    
    
class Authority(BaseModel):
    __tablename__ = 'authority'
    

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    phone = db.Column(db.String(20), unique = True, nullable = False)
    auth_key = db.Column(db.String(50), nullable = False)
    nickname = db.Column(db.String(20))
    photo = db.Column(db.String(100))
    roles = db.relationship('Role', secondary = user_role, backref = db.backref('users', lazy = 'dynamic'))
    
    def __init__(self, phone, auth_key, nickname, photo):
        self.phone = phone
        self.auth_key = auth_key
        self.nickname = nickname
        self.photo = photo