import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="bod">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                    <a className="navbar-brand" href="#">Sheikh Suleman</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/" >Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/contact" >Contact</NavLink>
                            </li> 
                        </ul>
                    </div>
                </nav>
</div>        

        );
    }
}
export default Navigation