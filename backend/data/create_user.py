import sys, os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import app
from utils import crypt
from models.user import db, User, Role, user_role


def add_user(phone, password, nickname, photo = 0):
    user = User(phone = phone, auth_key = crypt.pwd(password), nickname = nickname, photo = photo)
    db.session.add(user)
    db.session.commit()
    print('Add user succeed: ', user.id, user.phone, user.nickname)

    
def add_role():
    administrator = Role(name = 'Administrator')
    operator = Role(name = 'Operator')
    customer = Role(name = 'Customer')
    db.session.add_all((administrator, operator, customer))
    db.session.commit()
    print('Add role succeed: ', administrator.id, operator.id, customer.id)
    

def add_user_role(user_id, role_name):
    user = User.query.get(user_id)
    role = Role.query.filter_by(name = role_name).one()
    # print(user.id, role.name)
    user.roles.append(role)
    db.session.commit()
    print('Add user_role succeed: ', user.roles)
    

if __name__ == '__main__':
    app.app_context().push()
    add_user('18888888888', '123123', 'admin')
    add_user('18999994499', '123123', 'aaa')
    add_user('18999229999', '123123', 'bbb')
    add_user('18999911999', '123123', 'ccc')
    add_user('18999239999', '123123', 'eee')
    add_role()
    add_user_role(1, 'Administrator')
    add_user_role(2, 'Operator')
    add_user_role(2, 'Customer')