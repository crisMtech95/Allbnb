from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        imageUrl="https://cdn.contactcenterworld.com/images/user-master/2020-8-27-18221151.png",
        username='Demo', leaser=True, fullName="Demo", email='demo@aa.io', password='password',
        content="We believe there's nothing better than smart, inexpensive electronic innovations. We also believe there's nothing more annoying than mass-produced junk that works once. That's why our products are designed and manufactured with meticulous attention to detail and eco-friendly materials.")
    marnie = User(
        imageUrl="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png",
        username='admin', leaser=True, fullName="admin", email='admin@aa.io', password='password',
        content="We believe there's nothing better than smart, inexpensive electronic innovations. We also believe there's nothing more annoying than mass-produced junk that works once. That's why our products are designed and manufactured with meticulous attention to detail and eco-friendly materials.")
    bobbie = User(
        imageUrl="https://w7.pngwing.com/pngs/304/305/png-transparent-man-with-formal-suit-illustration-web-development-computer-icons-avatar-business-user-profile-child-face-web-design.png",
        username='bobbie', fullName="bobbie", email='bobbie@aa.io', password='password',
        content="We believe there's nothing better than smart, inexpensive electronic innovations. We also believe there's nothing more annoying than mass-produced junk that works once. That's why our products are designed and manufactured with meticulous attention to detail and eco-friendly materials.")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
