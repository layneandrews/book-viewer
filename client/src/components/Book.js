import { useNavigate } from "react-router"

function Book({title, image_url, id}) {
    const nav = useNavigate()

    return(
        <div>
            <hr />
            <img src={image_url} alt={title} onClick={() => nav(`/books/${id}`)}/>
            <h2>{title}</h2>
            
            <hr />
        </div>
    )
}

export default Book