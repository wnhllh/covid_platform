from schemas import ma

class ReviewSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'venue_id', 'review', 'created_at')

review_schema = ReviewSchema()
reviews_schema = ReviewSchema(many=True)