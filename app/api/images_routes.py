from flask import Blueprint, jsonify, request, session
from app.models import Post, Category, Image, Reservation, db


images_routes = Blueprint('images', __name__)


@images_routes.route("", methods=["POST"])
def createRev():
    newImg = Image(
        postId=request.json['postId'],
        imageUlr=request.json['imageUrl']
    )
    db.session.add(newImg)
    db.session.commit()
    return newImg.to_dict()


@images_routes.route("", methods=["DELETE"])
def delRev():
    img = Image.query.get(request.json['id'])
    db.session.delete(img)
    db.session.commit()
    return {"id": img.to_dict()['id']}
