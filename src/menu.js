import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.svg';

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark mb-5">
                    <div className="container">
                        <a className="navbar-brand text-uppercase" href="#">
                            {/* <img src={Logo} alt="logo" width="70" /> */}
                            ReactJS
                        </a>
                        <ul className="navbar-nav mr-5">
                            <li className="nav-item"><Link className="nav-link" to="/" >Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/App" >App</Link></li>
                        </ul>
                    </div>
                    <form className="form-inline">
                        <input type="text" placeholder="Pesquisar" className="form-control" />
                        <input type="sarch" value="Pes" className="btn btn-outline-primary col-lg-2" />
                    </form>
                </nav>
            </div>
        );
    }
}