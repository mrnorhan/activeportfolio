import React from 'react';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';


const Navigation = () => {
    // for scrolling
    const [navScroll, setNavScroll] = useState(true)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            setNavScroll(false)
        } else {
            setNavScroll(true)
        };
    })

    // const [subNavClick, setSubNavClick] = useState(false)

    return (
        <div id="Navigation-id">
            <nav  className={`navbar navbar-expand-lg fixed-top ${!navScroll && 'scrollsass'}`}>
                <a className="navbar-brand" href="#">mr.norhan</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavHashLink exact to="/#Navigation-id" activeClassName="main-nav-active" className="nav-link">Home</NavHashLink>
                        </li>
                        <li className="nav-item">
                        <NavHashLink exact to="/#Abouttitle-id" activeClassName="main-nav-active" className="nav-link" >About</NavHashLink>
                        </li>
                        <li className="nav-item">
                        <NavHashLink exact to="/#Workstitle-id" activeClassName="main-nav-active" className="nav-link" >Works</NavHashLink>
                        </li>
                        <li className="nav-item">
                        <NavHashLink exact to="/#Contacttitle-id" activeClassName="main-nav-active" className="nav-link" >Contact's</NavHashLink>
                        </li>
                        <li className="nav-item">
                        <NavHashLink exact to="/#top" activeClassName="main-nav-active" className="nav-link" >Curiculum Vitae</NavHashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
