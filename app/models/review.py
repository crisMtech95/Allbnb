from sqlalchemy.sql.schema import ForeignKey
from .db import db


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500), nullable=False)
    stars = db.Column(db.Numeric(10, 2))
    userId = db.Column(db.Integer, ForeignKey("users.id"))
    postId = db.Column(db.Integer, ForeignKey("posts.id"))

    post = db.relationship("Post", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'stars': self.stars,
            'userId': self.userId,
            'postId': self.postId,
        }
