from flask import Blueprint, jsonify, request, session
from app.models import Post, Category, Image, Reservation, db


search_routes = Blueprint('searchResults', __name__)


# @search_routes.route("/", methods=["PATCH"])
# def getSearchRes():
#     # type = request.json['category']
#     # city = request.json['city']
#     # posts = Post.query.filter_by().all()  # fill the filter by
#     # print("*"*40)
#     # print([r.to_dict() for r in Posts])
#     # print("*"*40)
#     return {"posts": [post.to_dict() for post in posts]}
