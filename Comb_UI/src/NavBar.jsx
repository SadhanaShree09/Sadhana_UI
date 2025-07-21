import { Link } from "react-router-dom"
function NavBar() {
return (
    <nav className="navbar">
            <h1 className="navbar-title">SADHANA UI</h1>
            <Link className="navbar-link" to='/'> Main Page </Link>
            <Link className="navbar-link" to='/quotes'>Quote App</Link>
            <Link className="navbar-link" to='/timeline'> Timeline</Link>
            <Link className="navbar-link" to='/userdetails'>User details</Link>
    </nav>
)
}

export default NavBar