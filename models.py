from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)

# Models Go Below----


# class Department(db.Model):
#     """Department model"""
#     __tablename__ = 'department'

#     dept_code = db.Column(db.Text,
#                           primary_key=True)

#     dept_name = db.Column(db.String(50), nullable=False, unique=True)

#     phone = db.Column(db.Text)

#     # employees = db.relationship('Employee')

#     def __repr__(self):
#         return f'<Department {self.dept_code} {self.dept_name} {self.phone}>'


class Cupcake(db.Model):
    """Cupcake model"""
    _tablename__ = 'cupcakes'

    id = db.Column(db.Integer,
                   primary_key=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False,
                      default='https://tinyurl.com/demo-cupcake')

    def serialize(self):
        return {
            'id': self.id,
            'flavor': self.flavor,
            'size': self.size,
            'rating': self.rating,
            'image': self.image,
        }
