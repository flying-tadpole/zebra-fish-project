import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <Link 
                to="/">
                <h2>Zebrafish</h2>
            </Link>
        </nav>
    )
}

export default Navbar