from cache import redis_conn

def check_in(venue_id, seats = 100):
    count = redis_conn.incr('count:' + venue_id)
    if count > seats:
      return False
    return True

def create_checkin(checkin_info):
  user_id = checkin_info.get('user_id')
  venue_id = checkin_info.get('venue_id')
  checkin_id = checkin_info.get('checkin_id')
  redis_conn.hset('checkin:' + str(checkin_id), user_id, venue_id)
  redis_conn.expire('checkin:' + str(checkin_id), 5 * 60)
  return True