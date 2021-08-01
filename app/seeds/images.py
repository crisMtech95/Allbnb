from app.models import db, Image


# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=1)
    image2 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=1)
    image3 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=1)
    image4 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbZou-ptozdZmG4rNNdLHkBn84adW-IovNG75EiP7SsAms4C1EiSHsrATrg1lWsZWQ4&usqp=CAU", postId=1)
    image5 = Image(imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Frewow.com%2Fblogs%2Ftrinity-falls-60%2F3257w-plan&psig=AOvVaw32vLSSuFoVOCXfJLUATGUc&ust=1627834326067000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICtk8nZjfICFQAAAAAdAAAAABAa", postId=2)
    image6 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=2)
    image7 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=2)
    image8 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=2)
    image9 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbZou-ptozdZmG4rNNdLHkBn84adW-IovNG75EiP7SsAms4C1EiSHsrATrg1lWsZWQ4&usqp=CAU", postId=3)
    image10 = Image(imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Frewow.com%2Fblogs%2Ftrinity-falls-60%2F3257w-plan&psig=AOvVaw32vLSSuFoVOCXfJLUATGUc&ust=1627834326067000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICtk8nZjfICFQAAAAAdAAAAABAa", postId=4)
    image11 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=5)
    image12 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=5)
    image13 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=5)
    image14 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbZou-ptozdZmG4rNNdLHkBn84adW-IovNG75EiP7SsAms4C1EiSHsrATrg1lWsZWQ4&usqp=CAU", postId=6)
    image15 = Image(imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Frewow.com%2Fblogs%2Ftrinity-falls-60%2F3257w-plan&psig=AOvVaw32vLSSuFoVOCXfJLUATGUc&ust=1627834326067000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICtk8nZjfICFQAAAAAdAAAAABAa", postId=7)
    image16 = Image(imageUrl="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2020/07/Coastal-house-interior-design.jpg", postId=8)
    image17 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ot956Zpj4UpQ3HfnwXgbJhZXIQsB2BQoZNogwBsNVsKcw0hZ1mCxiAgR_zQeP6Lk3y4&usqp=CAU", postId=8)
    image18 = Image(imageUrl="https://www.ranchosienna.com/media/9628577/perry-model-home-living.png", postId=8)
    image19 = Image(imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSbZou-ptozdZmG4rNNdLHkBn84adW-IovNG75EiP7SsAms4C1EiSHsrATrg1lWsZWQ4&usqp=CAU", postId=9)
    image20 = Image(imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Frewow.com%2Fblogs%2Ftrinity-falls-60%2F3257w-plan&psig=AOvVaw32vLSSuFoVOCXfJLUATGUc&ust=1627834326067000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICtk8nZjfICFQAAAAAdAAAAABAa", postId=10)

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

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
