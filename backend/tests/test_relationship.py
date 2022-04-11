import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from unittest import TestCase
from app import app
from models.venue import Venue

class TestVenue(TestCase):
    def test_review_by_id(self, venue_id = 1):
        app.app_context().push()
        venue = Venue.query.get(venue_id)
        # print(venue.reviews)
        for review in venue.reviews:
            print(review.user_id, review.review, review.created_at)

TestVenue().test_review_by_id(1)
