import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/design">Design</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </nav>
        );
    }
}

export default Navbar;
