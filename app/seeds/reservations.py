from app.models import db, Reservation


# Adds a demo user, you can add other users here if you want
def seed_reservations():
    res1 = Reservation(startTime="", endTime="", userId=, postId=1)

    db.session.add(res1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reservations():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
