from flask.cli import AppGroup
from .users import seed_users, undo_users
from .cate import seed_categories, undo_categories
from .posts import seed_posts, undo_posts
from .reservations import seed_reservations, undo_reservations
from .reviews import seed_reviews, undo_reviews
from .images import seed_images, undo_images
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    seed_users()
    seed_categories()
    seed_posts()
    seed_reservations()
    seed_reviews()
    seed_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_posts()
    undo_reservations()
    undo_reviews()
    undo_images()
    # Add other undo functions here
