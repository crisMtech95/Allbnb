from flask import Blueprint, jsonify, request, session
from app.models import Post, Category, Image, Reservation, Review, db


reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route("/<int:id>")
def getPostRev(id):
    reviews = Review.query.filter_by(postId=id).all()
    return {"reviews": [r.to_dict() for r in reviews]}


@reviews_routes.route("/", methods=["POST"])
def createRev():
    newRev = Review(
        userId=request.json['userId'],
        postId=request.json['postId'],
        comment=request.json['comment'],
        stars=request.json['stars'],
    )
    db.session.add(newRev)
    db.session.commit()
    return newRev.to_dict()


@reviews_routes.route("/", methods=["PATCH"])
def editRev():
    rev = Review.query.get(request.json['id'])
    rev.comment = request.json['comment']
    rev.stars = request.json['stars']

    db.session.commit()
    return rev.to_dict()


@reviews_routes.route("/", methods=["DELETE"])
def delRev():
    rev = Review.query.get(request.json['id'])
    db.session.delete(rev)
    db.session.commit()
    return {"id": rev.to_dict()['id']}
