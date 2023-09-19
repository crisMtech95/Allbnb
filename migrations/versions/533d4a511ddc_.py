"""empty message

Revision ID: 533d4a511ddc
Revises: a781086cdffe
Create Date: 2021-07-31 16:34:23.885079

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = '533d4a511ddc'
down_revision = 'a781086cdffe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('reviews', sa.Column('stars', sa.Integer(), nullable=True))
    """if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")"""
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('reviews', 'stars')
    # ### end Alembic commands ###
