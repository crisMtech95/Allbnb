from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(comment="Cute place! Walking distance from Times Square and very accessible to public transport! Absolutely loved it!", stars=4.50, userId=2, postId=1)
    review2 = Review(comment="Great central location, perfect size for 1 or 2 guests. Bathroom is a little tight but nothing you can’t get past. Kitchen is fully stocked although we didn’t utilize it. Host also has multiple hygiene items at your disposal if needed. Place was clean and tidy. Would definitely stay again!", stars=3.50, userId=2, postId=1)
    review3 = Review(comment="Very convenient place to stay! Michael was responsive and helpful.", stars=3.50, userId=2, postId=1)
    review4 = Review(comment="My boyfriend and I are so happy we got to stay here! L", stars=4.50, userId=3, postId=1)
    review5 = Review(comment="Great spot and communicative host", stars=5.00, userId=3, postId=1)
    review6 = Review(comment="Great location!!!! ", stars=4.50, userId=2, postId=2)
    review7 = Review(comment="Really nice place and great host :)", stars=4.50, userId=2, postId=2)
    review8 = Review(comment="Cozy place in Manhattan near the water!! Pe", stars=4.50, userId=1, postId=5)
    review9 = Review(comment="Amazing location and many amenities. Very cute decor, would recommend to anyone.", stars=3.50, userId=1, postId=5)
    review10 = Review(comment="Michael’s place was just great! Exceptionally well supplied and comfortable. Best money I’ve spent in a long time. He was very responsive to any questions I had and quickly too.", stars=2.50, userId=1, postId=5)
    review11 = Review(comment="Amazing place in the heart of Manhattan!", stars=4.50, userId=1, postId=5)
    review12 = Review(comment="Had a wonderful time staying! Radiator makes a little noise but other wise it is a peaceful place to stay (:", stars=3.50, userId=1, postId=8)
    review13 = Review(comment="Great place to stay!", stars=2.50, userId=1, postId=8)
    review14 = Review(comment="Great cozy place, centrally located near many restaurants, bodegas. Highly walkable neighborhood. You get a true taste of living in Manhattan. Michael was a great communicative host, he checked up several times to make sure things were going smooth. Highly recommend.", stars=4.50, userId=1, postId=8)

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)
    db.session.add(review11)
    db.session.add(review12)
    db.session.add(review13)
    db.session.add(review14)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
