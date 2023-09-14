"""empty message

Revision ID: 2ff7450ec3b7
Revises: 533d4a511ddc
Create Date: 2021-08-04 19:20:14.908770

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = '2ff7450ec3b7'
down_revision = '533d4a511ddc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('posts', 'content')
    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('posts', sa.Column('content', sa.VARCHAR(length=1000), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
