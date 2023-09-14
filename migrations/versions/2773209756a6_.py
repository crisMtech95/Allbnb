"""empty message

Revision ID: 2773209756a6
Revises: b064c3bd6184
Create Date: 2021-09-04 12:42:31.472408

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = '2773209756a6'
down_revision = 'b064c3bd6184'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'leaser')
    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('leaser', sa.BOOLEAN(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
