"""added title column

Revision ID: 49dd1af65eae
Revises: 4ec34f176409
Create Date: 2023-09-08 01:51:48.301009

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '49dd1af65eae'
down_revision = '4ec34f176409'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.add_column(sa.Column('title', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('books', schema=None) as batch_op:
        batch_op.drop_column('title')

    # ### end Alembic commands ###
