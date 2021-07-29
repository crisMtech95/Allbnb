from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():
    Houses = Category(type="Houses")
    Bikes = Category(type="Bikes")
    Games = Category(type="Games")
    Motorcycles = Category(type="Motorcycles")
    Tools = Category(type="Tools")
    PartySupplies = Category(type="Party Supplies")
    CampingGear = Category(type="Camping Gear")
    Fitness = Category(type="Fitness Equipment/Spots")
    Others = Category(type="Others")

    db.session.add(Houses)
    db.session.add(Bikes)
    db.session.add(Games)
    db.session.add(Motorcycles)
    db.session.add(Tools)
    db.session.add(PartySupplies)
    db.session.add(CampingGear)
    db.session.add(Fitness)
    db.session.add(Others)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
