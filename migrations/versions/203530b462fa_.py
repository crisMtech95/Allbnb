"""empty message

Revision ID: 203530b462fa
Revises: 2773209756a6
Create Date: 2021-09-04 12:43:46.395734

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '203530b462fa'
down_revision = '2773209756a6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('leaser', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'leaser')
    # ### end Alembic commands ###
