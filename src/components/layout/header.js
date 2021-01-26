import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth  from "./../auth/google-auth";
const Header = () => {
    return (
        <div className="ui secondary  menu">
            <Link to="/" className="item">Twitchy Streams</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    )
}

export default Header;