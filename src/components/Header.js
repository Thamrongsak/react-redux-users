import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <nav className="nav has-shadow" id="top">
                <div className="container">
                    <div className="nav-left">
                        <Link to="/" className="nav-item">
                            <img src="http://bulma.io/images/bulma-logo.png" alt="Description" />
                        </Link>
                    </div>
                    <span className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                        <NavLink exact to="/" className="nav-item is-tab"  activeClassName="is-active">Home</NavLink>
                        <NavLink to="/carduser" className="nav-item is-tab"  activeClassName="is-active">Users</NavLink>
                        <a className="nav-item is-tab">Features</a>
                        <a className="nav-item is-tab">Team</a>
                        <a className="nav-item is-tab">Help</a> 
                        <span className="nav-item">
                            <a className="button">Log in</a>
                            <a className="button is-info">Sign up</a>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header