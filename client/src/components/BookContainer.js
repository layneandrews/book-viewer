import Book from "./Book"

function BookContainer({books}) {
    const mappedBooks = () => 
        books.map((book) => <Book {...book} />)

    
    return <div>{mappedBooks()}</div>
}

export default BookContainer