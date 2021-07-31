from app.models import db, Post


# Adds a demo user, you can add other users here if you want
def seed_posts():
    post1 = Post(
        userId=1, categoryId=1, address="1234 random Ave",
        city="elmhurst", state="New York", price=100, lat=123, lng=542,
        content="So this is the description for this random content")
    post2 = Post(
        userId=1, categoryId=1, address="1234 random Ave",
        city="elmhurst", state="New York", price=130, lat=123, lng=542,
        content="So this is the description for this random content")
    post3 = Post(
        userId=1, categoryId=2, address="1234 random Ave",
        city="elmhurst", state="New York", price=120, lat=123, lng=542,
        content="So this is the description for this random content")
    post4 = Post(
        userId=1, categoryId=2, address="1234 random Ave",
        city="elmhurst", state="New York", price=107, lat=123, lng=542,
        content="So this is the description for this random content")
    post5 = Post(
        userId=2, categoryId=1, address="5432 random Ave",
        city="Los Angeles", state="California", price=210, lat=123, lng=542,
        content="So this is the description for this random content")
    post6 = Post(
        userId=2, categoryId=2, address="5432 random Ave",
        city="Los Angeles", state="California", price=450, lat=123,lng=542,
        content="So this is the description for this random content")
    post7 = Post(
        userId=2, categoryId=3, address="5432 random Ave",
        city="Los Angeles", state="California", price=650, lat=123, lng=542,
        content="So this is the description for this random content")
    post8 = Post(
        userId=3, categoryId=1, address="8955 random Ave",
        city="Miami", state="Florida", price=450, lat=123, lng=542,
        content="So this is the description for this random content")
    post9 = Post(
        userId=3, categoryId=2, address="8955 random Ave",
        city="Miami", state="Florida", price=780, lat=123, lng=542,
        content="So this is the description for this random content")
    post10 = Post(
        userId=3, categoryId=3, address="8955 random Ave",
        city="Miami", state="Florida", price=970, lat=123, lng=542,
        content="So this is the description for this random content")

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
