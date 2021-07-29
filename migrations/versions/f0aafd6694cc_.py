"""empty message

Revision ID: f0aafd6694cc
Revises: 8afc632e9b37
Create Date: 2021-07-29 12:33:02.039837

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0aafd6694cc'
down_revision = '8afc632e9b37'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('images', 'imageUrl')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('images', sa.Column('imageUrl', sa.VARCHAR(length=50), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
