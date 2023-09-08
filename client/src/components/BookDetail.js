import { useEffect, useState } from "react"
import { useParams } from "react-router"


function BookDetail() {
    const [bookDetail, setBookDetail] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`http://127.0.0.1:5555/books/${id}`)
            .then((res) => res.json())
            .then((oneBook) => {
                console.log(oneBook)
                setBookDetail(oneBook)
            })
    }, [])
    
    return (
        <div>
            <img src={bookDetail.image_url} alt={bookDetail.title}/>
            <h1>{bookDetail.title}</h1>
            <h1>{bookDetail.author}</h1>
            <h1>{bookDetail.genre}</h1>
        </div>
    )
}

export default BookDetail