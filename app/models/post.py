from sqlalchemy.sql.schema import ForeignKey
from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    lat = db.Column(db.Integer, nullable=False)
    lng = db.Column(db.Integer, nullable=False)
    content = db.Column(db.String(1000))
    userId = db.Column(db.Integer, ForeignKey("users.id"))
    categoryId = db.Column(db.Integer, ForeignKey("categories.id"))

    reviews = db.relationship("Review", back_populates="post")
    user = db.relationship("User", back_populates="post")
    type = db.relationship("Category", back_populates="post")
    image = db.relationship("Image", back_populates="post")

    def to_dict(self):
        return {
            'id': self.id,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'price': self.price,
            'lat': self.lat,
            'lng': self.lng,
            'content': self.content,
            'userId': self.userId,
            'categoryId': self.categoryId,
        }


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500))

    post = db.relationship("Post", back_populates="type")

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'description': self.description,
        }


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    imageUrl = db.Column(db.String(50), nullable=False)
    postId = db.Column(db.Integer, ForeignKey("posts.id"))

    post = db.relationship("Post", back_populates="image")

    def to_dict(self):
        return {
            'id': self.id,
            'imageUrl': self.imageUrl,
            'postId': self.postId,
        }


class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    startTime = db.Column(db.DateTime, nullable=False)
    endTime = db.Column(db.DateTime, nullable=False)
    userId = db.Column(db.Integer, ForeignKey("users.id"))
    postId = db.Column(db.Integer, ForeignKey("posts.id"))

    def to_dict(self):
        return {
            'id': self.id,
            'startTime': self.startTime,
            'endTime': self.endTime,
            'useId': self.userId,
            'postId': self.postId
        }
