from sqlalchemy.sql.schema import ForeignKey
from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    lat = db.Column(db.Integer)
    lng = db.Column(db.Integer)
    content = db.Column(db.String(1000))
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    categoryId = db.Column(db.Integer, ForeignKey("categories.id"), nullable=False)

    reviews = db.relationship("Review", back_populates="post")
    user = db.relationship("User", back_populates="post")
    type = db.relationship("Category", back_populates="post")
    image = db.relationship("Image", cascade="all, delete-orphan", back_populates="post")
    reservation = db.relationship("Reservation", back_populates="post")

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
            'images': [img.to_dict() for img in self.image],
            'reservations': [r.to_dict() for r in self.reservation],
            'reviews': [r.to_dict() for r in self.reviews]
        }


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)

    post = db.relationship("Post", back_populates="type")

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'post': [p.to_dict() for p in self.post]
        }


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    imageUrl = db.Column(db.String(1000), nullable=False)
    postId = db.Column(db.Integer, ForeignKey("posts.id"), nullable=False)

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
    startTime = db.Column(db.String(), nullable=False)
    endTime = db.Column(db.String(), nullable=False)
    userId = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
    postId = db.Column(db.Integer, ForeignKey("posts.id"), nullable=False)

    user = db.relationship("User", back_populates="reservation")
    post = db.relationship("Post", back_populates="reservation")

    def to_dict(self):
        return {
            'id': self.id,
            'startTime': self.startTime,
            'endTime': self.endTime,
            'useId': self.userId,
            'postId': self.postId
        }
