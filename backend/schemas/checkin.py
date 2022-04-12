from schemas import ma

class CheckinSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'venue_id', 'review', 'created_at')

checkin_schema = CheckinSchema()
checkins_schema = CheckinSchema(many=True)