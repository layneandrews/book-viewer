from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Book, User   
from flask_cors import CORS
#===========================================================#
app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)
#===========================================================# 
class Books(Resource):
    def get(self):  #Index route
        all_books = [book.to_dict() for book in Book.query.all()]
        return make_response(all_books, 200)
    
    def post(self):  #Create route
        form_json = request.get_json()
        new_book = Book(
            title=request.form['title'],
            author=request.form['author'],
            genre=request.form['genre'],
            image_url=request.form['image_url'],
        )
        db.session.add(new_book)
        db.session.commit()
        return make_response(new_book.to_dict(), 201)
    
api.add_resource(Books, "/books")
#===========================================================# 
class BookByID(Resource):
    def get(self, book_id):  #Show route
        found_book = Book.query.filter_by(id=book_id).first()
        if found_book:
            return make_response(found_book.to_dict(), 200)
        else:
            return make_response({"error": f'Book {book_id} not found'}, 404)
        
    def patch(self, book_id):
        found_book = Book.query.filter_by(id=book_id).first()
        form_data = request.get_json()
        for key in form_data:
            setattr(found_book, key, form_data[key])
        db.session.add(found_book)
        db.session.commit()
        return make_response(found_book.to_dict(), 200)

    def delete(self, book_id):
        found_book = Book.query.filter_by(id=book_id).first()
        db.session.delete(found_book)
        db.session.commit()
        return make_response({}, 204)
        
api.add_resource(BookByID, "/books/<int:book_id>")
#===========================================================#
if __name__ == '__main__':
    app.run(port=5555, debug=True)