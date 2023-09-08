import {NavLink} from "react-router-dom"

function Nav() {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/books/new">Add a Book</NavLink>
        </div>
    )

}

export default Nav