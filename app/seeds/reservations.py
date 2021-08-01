from app.models import db, Reservation


# Adds a demo user, you can add other users here if you want
def seed_reservations():
    res1 = Reservation(startTime="08/10/2021", endTime="09/10/2021", userId=2, postId=1)
    res2 = Reservation(startTime="10/10/2021", endTime="11/10/2021", userId=2, postId=1)
    res3 = Reservation(startTime="13/10/2021", endTime="15/10/2021", userId=3, postId=1)
    res4 = Reservation(startTime="18/10/2021", endTime="30/10/2021", userId=3, postId=5)
    res5 = Reservation(startTime="05/10/2021", endTime="08/10/2021", userId=3, postId=5)
    res6 = Reservation(startTime="11/10/2021", endTime="13/10/2021", userId=3, postId=2)
    res7 = Reservation(startTime="05/10/2021", endTime="08/10/2021", userId=3, postId=2)
    res8 = Reservation(startTime="08/10/2021", endTime="08/10/2021", userId=1, postId=5)
    res9 = Reservation(startTime="08/10/2021", endTime="08/10/2021", userId=1, postId=8)

    db.session.add(res1)
    db.session.add(res2)
    db.session.add(res3)
    db.session.add(res4)
    db.session.add(res5)
    db.session.add(res6)
    db.session.add(res7)
    db.session.add(res8)
    db.session.add(res9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reservations():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
