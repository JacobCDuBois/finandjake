import React, { useState } from 'react';
import {Link} from "react-router-dom";

const NavMenu = () => {


    return (
        <div>
            <nav className="App-menu ">
                <ul >
                    <li className="green_text"><Link to="/">Home</Link></li>
                    <li><Link to="/rsvp">RSVP</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    <li><Link to="/timeline">Timeline</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavMenu;
