from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=1)
    image2 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=1)
    image3 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=1)
    image4 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbZou-ptozdZmG4rNNdLHkBn84adW-IovNG75EiP7SsAms4C1EiSHsrATrg1lWsZWQ4&usqp=CAU", postId=1)

    image5 = Image(imageUrl="https://media.istockphoto.com/photos/beautiful-house-in-florida-picture-id185235041?k=6&m=185235041&s=612x612&w=0&h=Q7oGJhsyQC23qQ9gg4ExR3CE984FHmJVqdf65GXzBdY=", postId=6)
    image6 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=6)
    image7 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=6)
    image8 = Image(imageUrl="https://losangelesgeneralcontractor.com/wp-content/uploads/2017/12/building-a-house-in-los-angeles.jpg", postId=4)

    image9 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtx5uY3JPmeF_7QdztHzDVYsQNMc6Z-nY2SQ&usqp=CAU", postId=3)
    image10 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=4)
    image11 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=2)
    image12 = Image(imageUrl="https://sdg-migration-id.s3.amazonaws.com/living-room-los-angeles-belzberg-architects-curated-boy-winner-large-house-1215.jpg", postId=2)
    image13 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=2)
    image14 = Image(imageUrl="https://settlersindia.com/uploads/old/3_78.jpg", postId=4)
    image15 = Image(imageUrl="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F960743598%2F0x0.jpg", postId=7)
    image16 = Image(imageUrl="https://p.vitalmx.com/photos/forums/2016/02/10/123427/s1200_image.jpg", postId=8)
    image17 = Image(imageUrl="https://motocrossactionmag.com/wp-content/uploads/2014/06/redyzslide.jpg", postId=8)
    image18 = Image(imageUrl="https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/2020-Honda-CRF110F-vs-Yamaha-TT-R110E-Comparison-youth-motorcycle-dirt-bike.jpg", postId=8)
    image19 = Image(imageUrl="https://s.hdnux.com/photos/01/01/15/44/17094942/3/1200x0.jpg", postId=10)
    image20 = Image(imageUrl="https://i.pinimg.com/originals/1e/ff/18/1eff18e1e6c0997ec8435fdebe9ddc23.jpg", postId=10)

    image21 = Image(imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc-0269-1590006745.jpg", postId=5)
    image22 = Image(imageUrl="https://www.carscoops.com/wp-content/uploads/2020/02/2020-Honda-Civic-Type-R-1-1.jpg", postId=5)
    image23 = Image(imageUrl="https://bloximages.newyork1.vip.townnews.com/gazettextra.com/content/tncms/assets/v3/editorial/9/cd/9cd26fdf-5aeb-5ec0-93da-3ac3e5841892/5f99cab8b4e74.image.jpg?resize=1396%2C931", postId=5)
    image24 = Image(imageUrl="https://images.hgmsites.net/med/2021-honda-civic-sdn_100774977_m.jpg", postId=5)

    image25 = Image(imageUrl="https://cdn.recreation.gov/s3fs-public/styles/promotional_image/public/2020-06/Camping%20Gear%20in%20front%20of%20Tent_1.jpg?pJ6poMsfYl6aGDzYvzuLnOLPPXFR4X4F", postId=7)
    image26 = Image(imageUrl="https://img.hipcamp.com/images/f_auto,q_auto/v1511675008/journal/mm6fkfqaezssodwjss1r/mm6fkfqaezssodwjss1r.jpg", postId=7)
    image27 = Image(imageUrl="https://www.freshoffthegrid.com/wp-content/uploads/Backpacking-Gear.jpg", postId=7)
    image28 = Image(imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camping-gear-1618333631.jpg?crop=0.668xw:1.00xh;0,0&resize=640:*", postId=7)

    image29 = Image(imageUrl="https://cdn.onekindesign.com/wp-content/uploads/2016/02/Modern-House-Interiors-DTM-Interiors-01-1-Kindesign.jpg", postId=3)
    image30 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7K2EE9BzuJr9igO6FZPe_zv9wOKKZ-hcYSVZKVk56TI1c_GUEa1QTz2LzldudAmTwtc&usqp=CAU", postId=3)
    image31 = Image(imageUrl="https://i.ytimg.com/vi/OKvPoGjWeO4/maxresdefault.jpg", postId=3)
    image32 = Image(imageUrl="https://cdn.homedsgn.com/wp-content/uploads/2013/04/Spectacular-Views-Over-Los-Angeles-06-800x532.jpg", postId=10)

    image33 = Image(imageUrl="https://i.pinimg.com/originals/bf/cc/91/bfcc91fdab980e69eba9000b794718fd.png", postId=9)
    image34 = Image(imageUrl="https://cdn.frazerphotos.com/75453/75453_1841_520.jpg", postId=9)
    image35 = Image(imageUrl="https://www.rentaboat.com/boats/result_644.JPG", postId=9)
    image36 = Image(imageUrl="https://northwoodspropeller.com/2016/wp-content/uploads/2016/05/2007-honda-aquatrax-1200.jpg", postId=9)

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
