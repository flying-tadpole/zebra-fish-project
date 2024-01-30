import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <Link 
                to="/">
                <h2>Zebrafish</h2>
            </Link>
            <Link 
                to="/lab-list">
                <h2>Labs</h2>
            </Link>
            <Link 
                to="/health-reports">
                <h2>Health Reports</h2>
            </Link>
            <Link 
                to="/census">
                <h2>Census</h2>
            </Link>
        </nav>
    )
}

export default Navbar