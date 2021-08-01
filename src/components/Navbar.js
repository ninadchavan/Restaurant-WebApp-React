import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/">
                        <button className="nav-item btn btn-dark" onClick="#">Home</button>
                    </Link>
                    <Link to="/categories">
                        <button className="nav-item btn btn-dark" onClick="#">Categories</button>
                    </Link>
                    <Link to="/orders">
                        <button className="nav-item btn btn-dark" onClick="#">Orders</button>
                    </Link>
                    <Link to="/feedback">
                        <button className="nav-item btn btn-dark" onClick="#">Feedback</button>
                    </Link>
                    <Link to="/contactus">
                        <button className="nav-item btn btn-dark" onClick="#">Contact Us</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}