"""empty message

Revision ID: 67bc6089007d
Revises: f918909584ed
Create Date: 2021-08-05 11:11:38.308912

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = '67bc6089007d'
down_revision = 'f918909584ed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'imageUrl')
    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('imageUrl', sa.VARCHAR(length=40), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
