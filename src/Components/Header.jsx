import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpeg';

export default function Header() {

    const [searchVal, setSearchVal] = useState("");


    return (
        <>
            <div className='container-fluid bg-light'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src={logo} alt="logo" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contdata">ContactData</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mobiles">Mobiles</Link>
                            </li>
                        </ul>
                    </div>

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        </>
    );
}
