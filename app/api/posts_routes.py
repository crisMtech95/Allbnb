from flask import Blueprint, jsonify

from app.models import Post

posts_routes = Blueprint('posts', __name__)


# @posts_routes.route('/')
# def users():
#     users = User.query.all()
#     return {'users': [user.to_dict() for user in users]}


# @posts_routes.route('/<int:id>')
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

@posts_routes.route('/')
def users():
    # newPost = Post (

    # )
    # return {'users': [user.to_dict() for user in users]}
