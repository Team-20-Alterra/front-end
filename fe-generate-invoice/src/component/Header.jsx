import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <div className="navBar container mt-4">
            <div className="navbar-left">
                <p className="logo">{props.name}</p>
                <a href="/"><p className="navLink">Beranda</p></a>
                <a href="#fitur"><p className="navLink">Fitur</p></a>
                <Link to="/getapp"><p className="navLink">Dapatkan Aplikasi</p></Link>
            </div>
            <div className="navbar-right">
                <p className="navLink signup">Sign Up</p>
                <Link to="/login"><p className="navLink login">Login</p></Link>
            </div>
        </div>
    )

}