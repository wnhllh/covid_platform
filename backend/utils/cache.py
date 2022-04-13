from utils import rd

def save_token(token, user_id, exprires_in = 1 * 24 * 3600):
    rd.set(token, user_id)
    rd.expire(token, exprires_in)
    
def clear_token(token):
    rd.delete(token)    
    
def get_user_id_by_token(token):
    return rd.get(token)
