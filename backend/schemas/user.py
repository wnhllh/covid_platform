from schemas import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'phone', 'auth_key', 'nickname', 'photo')

user_schema = UserSchema()
users_schema = UserSchema(many=True)