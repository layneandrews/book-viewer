import { useState } from "react"

function BookForm({postBook}) {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre: "",
        image_url: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    postBook(formData)
        
        
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return(
        <div>
            <h1>Add Book:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input name="title" value={formData.title} onChange={handleChange}/>
                </label>
        <br/>
                <label>
                    Author:
                    <input name="author" value={formData.author} onChange={handleChange}/>
                </label>
        <br/>
                <label>
                    Genre:
                    <input name="genre" value={formData.genre} onChange={handleChange}/>
                </label>
        <br/>
                <label>
                    Image URL:
                    <input name="image_url" value={formData.image_url} onChange={handleChange}/>
                </label>
        <br/>
        <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default BookForm