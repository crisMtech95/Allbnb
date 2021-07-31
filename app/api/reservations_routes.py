from flask import Blueprint, jsonify, request, session
from app.models import Post, Category, Image, Reservation, db


reservations_routes = Blueprint('reservations', __name__)


@reservations_routes.route("/<int:id>")
def getPostRes(id):
    reservations = Reservation.query.filter_by(postId=id).all()
    return {"reservations": [r.to_dict() for r in reservations]}


# CHECK IF YOU don't NEED THE / ON THE ROUTE
@reservations_routes.route("/", methods=["POST"])
def createRes():
    newRes = Reservation(
        userId=request.json['userId'],
        postId=request.json['postId'],
        startTime=request.json['startTime'],
        endTime=request.json['endTime'],
    )
    db.session.add(newRes)
    db.session.commit()
    return newRes.to_dict()


@reservations_routes.route("/", methods=["PATCH"])
def editRes():
    res = Reservation.query.get(request.json['id'])
    res.startTime = request.json['startTime']
    res.endTime = request.json['endTime']

    db.session.commit()
    return res.to_dict()


@reservations_routes.route("/", methods=["DELETE"])
def delRes():
    res = Reservation.query.get(request.json['id'])
    db.session.delete(res)
    db.session.commit()
    return {"id": res.to_dict()['id']}
