from cache import redis_conn

def save_token(token, user_id, exprires_in = 1 * 24 * 3600):
    redis_conn.set(token, user_id)
    redis_conn.expire(token, exprires_in)
    
def clear_token(token):
    redis_conn.delete(token)    
    
def get_user_id_by_token(token):
    return redis_conn.get(token)