import {useState, useEffect} from "react"
import {Routes, Route, useNavigate} from "react-router"
import Home from "./components/Home";
import Nav from "./components/Nav";
import BookContainer from "./components/BookContainer";
import BookDetail from "./components/BookDetail";
import BookForm from "./components/BookForm";

function App() {
  const [books, setBooks] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    fetchAllBooks()
  }, [])

  function fetchAllBooks() {
    fetch("http://127.0.0.1:5555/books")
    .then((res) => res.json())
    .then(allBooks => {
      console.log(allBooks)
      setBooks(allBooks)
      
    })
  }

  const postBook = (bookFormData) => {
    const postReqObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookFormData),
    }
    fetch("http://127.0.0.1:5555/books", postReqObj)
      .then((res) => res.json())
      .then((newBookObj) => {
        console.log(newBookObj)
        setBooks([...books, newBookObj])
        nav(`/books/${newBookObj.id}`)
      })
  }

  return (
      <div>
        <Nav />
        <Routes>
          <Route exact path="/books/new" element={<BookForm postBook={postBook}/>} /> 
          <Route path ="/books/:id" element={<BookDetail  />} />
          <Route path="/books" element={<BookContainer books={books}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
