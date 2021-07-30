from flask import Blueprint, jsonify, request, session

from app.models import Post, Category, Image, db

posts_routes = Blueprint('posts', __name__)


# @posts_routes.route('/')
# def users():
#     users = User.query.all()
#     return {'users': [user.to_dict() for user in users]}


@posts_routes.route('/user/<int:id>')
def user_posts(id):
    posts = Post.query.filter_by(userId=id).all()
    print("-"*40)
    print(posts)
    print("-"*40)
    return {"userPosts": [p.to_dict() for p in posts]}


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
    print("-"*40, request.json['id'])
    newPost = Post.query.get(request.json['id'])
    print("==============", newPost)
    newPost.address = request.json['address']
    newPost.city = request.json['city']
    newPost.state = request.json['state']
    newPost.price = request.json['price']
    newPost.lat = request.json['lat']
    newPost.lng = request.json['lng']
    newPost.content = request.json['content']
   
    db.session.commit()
    return newPost.to_dict()
    # return {"message": "hi"}
