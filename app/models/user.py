from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(40), nullable=False)
    imageUrl = db.Column(db.String(3000))
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    content = db.Column(db.String(1000))
    leaser = db.Column(db.Boolean(), default=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    post = db.relationship("Post", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")
    reservation = db.relationship("Reservation", back_populates="user")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'fullName': self.fullName,
            'imageUrl': self.imageUrl,
            'username': self.username,
            'email': self.email,
            'content': self.content,
            'leaser': self.leaser,
        }
