"""empty message

Revision ID: e4c884392f78
Revises: 2ff7450ec3b7
Create Date: 2021-08-04 20:03:02.963773

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = 'e4c884392f78'
down_revision = '2ff7450ec3b7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('images', 'imageUrl')
    op.add_column('posts', sa.Column('content', sa.String(length=1000), nullable=True))
    """if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")"""
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'content')
    op.add_column('images', sa.Column('imageUrl', sa.VARCHAR(length=1000), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
