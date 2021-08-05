from flask import Blueprint, jsonify, request, session

from app.models import Post, Category, Image, db

posts_routes = Blueprint('posts', __name__)


@posts_routes.route('/<int:id>')
def users(id):
    post = Post.query.get(id)
    return post.to_dict()


@posts_routes.route('/user/<int:id>')
def users_posts(id):
    posts = Post.query.filter_by(userId=id).all()
    return {"userPosts": [p.to_dict() for p in posts]}


@posts_routes.route('/search', methods=["PATCH"])
def user_posts():
    posts = Post.query.filter(Post.city.ilike(request.json['city'])).all()
    return {"search": [p.to_dict() for p in posts]}


# CHECK IF YOU NEED THE / ON THE ROUTE
@posts_routes.route('', methods=['DELETE'])
def del_post():
    post = Post.query.get(request.json['id'])
    db.session.delete(post)
    db.session.commit()
    return {"id": post.to_dict()['id']}


@posts_routes.route('', methods=["POST"])
def create_post():
    oldCatClass = Category.query.filter_by(type=request.json['category']).first()
    oldCat = oldCatClass.to_dict()
    newPost = Post(
        userId=request.json['userId'],
        categoryId=oldCat['id'],
        title=request.json['title'],
        address=request.json['address'],
        city=request.json['city'],
        state=request.json['state'],
        price=request.json['price'],
        lat=request.json['lat'],
        lng=request.json['lng'],
        content=request.json['content'],
        )
    db.session.add(newPost)
    newImage = Image(
        post=newPost,
        imageUrl=request.json['imageUrl']
    )
    db.session.add(newImage)
    db.session.commit()
    return newPost.to_dict()


@posts_routes.route('', methods=["PATCH"])
def edit_post():
    newPost = Post.query.get(request.json['id'])
    newPost.address = request.json['address']
    newPost.city = request.json['city']
    newPost.title = request.json['title']
    newPost.state = request.json['state']
    newPost.price = request.json['price']
    newPost.lat = request.json['lat']
    newPost.lng = request.json['lng']
    newPost.content = request.json['content']

    db.session.commit()
    return newPost.to_dict()
    # return {"message": "hi"}
