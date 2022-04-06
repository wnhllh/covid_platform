from flask_marshmallow import Marshmallow

ma = Marshmallow()

class VenueSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'latitude', 'longitude', 'image_num', 'created_at')
        
class ReviewSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'venue_id', 'review', 'created_at')
        
venue_schema = VenueSchema()
venues_schema = VenueSchema(many=True)

review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)