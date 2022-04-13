from schemas import ma

class VenueSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'latitude', 'longitude', 'image_num', 'created_at')      
        
venue_schema = VenueSchema()
venues_schema = VenueSchema(many=True)
