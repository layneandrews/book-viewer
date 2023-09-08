from app import app
from models import db, Book, User


with app.app_context():
    Book.query.delete()

    books = []

    b1 = Book(title="Holes", author="Louis Sachar", genre="Young adult fiction", image_url="https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2015/12/holes-louis-sachar-book-cover.jpg?fit=500%2C761&ssl=1")
    books.append(b1)
    
    b2 = Book(title="The Alchemist", author="Paulo Coelho", genre="Adventure", image_url="https://m.media-amazon.com/images/I/51bDuU2p5zL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")
    books.append(b2)

    b3 = Book(title="V for Vendetta", author="Alan Moore", genre="Graphic novel", image_url="https://m.media-amazon.com/images/I/51mZ6kipU3L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg")
    books.append(b3)

    db.session.add_all(books)
    db.session.commit()