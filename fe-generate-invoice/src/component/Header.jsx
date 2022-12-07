import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent navBar">
                <div className="container gap-lg-5">
                    <div className="logo">{props.name}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="navbar-nav me-auto mb-lg-0 gap-md-0 mb-3 header-page__navbar">
                        <ul>
                            <li className="nav-item">
                                <a href="/"><div className="navLink">Beranda</div></a>
                            </li>
                            <li className="nav-item">
                                <a href="#fitur"><div className="navLink">Fitur</div></a>
                            </li>
                            <li className="nav-item">
                                <Link to="/getapp"><div className="navLink">Dapatkan Aplikasi</div></Link>
                            </li>
                        </ul>
                        </div>
                        <div className="navbar-right">
                            <Link to="/register"><div className="navLink signup">Daftar</div></Link>
                            <Link to="/login"><div className="navLink login">Masuk</div></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}