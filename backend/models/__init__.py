import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Venue(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text())
    latitude = db.Column(db.Numeric)
    longitude = db.Column(db.Numeric)
    image_num = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    
    
    # def __repr__(self):
    #     return f"Venue: {self.name}"
       
    def __init__(self, name, description, latitude, longitude, image_num):
        self.name = name
        self.description = description
        self.latitude = latitude
        self.longitude = longitude
        self.image_num = image_num
        
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
        