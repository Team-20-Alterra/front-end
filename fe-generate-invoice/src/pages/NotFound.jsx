import React from 'react'
import NotFoundBg from '../assets/image/404.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container-notfound">
            <div className="notfoundpage">
                <div className="notfoundpage-main">
                    <img src={NotFoundBg} alt="" />
                    <h3>Oops! Something When Wrong!</h3>
                    <Link to={'/'}><button>Return To Home</button></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound