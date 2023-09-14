from sqlalchemy.sql.schema import ForeignKey
from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = "reviews"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(500), nullable=False)
    stars = db.Column(db.Integer)
    userId = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("users.id")))
    postId = db.Column(db.Integer, ForeignKey(add_prefix_for_prod("posts.id")))

    post = db.relationship("Post", back_populates="reviews")
    user = db.relationship("User", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'comment': self.comment,
            'stars': self.stars,
            'userId': self.userId,
            'postId': self.postId,
            'user': self.user.to_dict(),
        }
