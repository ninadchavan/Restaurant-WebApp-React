import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home(){
    return(
        <div className="row content-home">
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
            <div className="col-md-3 mes">
                <h1>Welcome to the Restaurant</h1>
                <Link to="/categories">
                    <button className="btn btn-success">Go to Categories -{'>'}</button>
                </Link>
            </div>
        </div>
    )
}