import React, { useState } from 'react';
import { Table } from './Table';

export const Navbar = ({ handleSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = (event) => {
        event.preventDefault();
        handleSearch(searchQuery);
    };

    const toStyle = {
        padding: '20px',
        backgroundColor: '#9adadf'
    }
    const colorStyle = {
        color: '#000000'
    }
    const imageStyle = {
        borderRadius: '50%',
        width: '30px',
        height: '24px',
    }; 
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" style={toStyle}>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <ul className="nav nav-pills" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" >
                                <p style={colorStyle}>Users</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" >
                                <p style={colorStyle}>Campaign</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" >
                                <p style={colorStyle}>Tables</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#" >
                                <p style={colorStyle}>List</p>
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" >
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Search by name, username, or email"
                            value={searchQuery}
                            onChange={handleChange}
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success"  onClick={handleSearchClick}>Search</button>
                    </form>
                    <div className="nav justify-content-end">
                        <li className="nav-item dropdown">

                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >

                                <img
                                    src="https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
                                    alt="Logo"
                                    style={imageStyle}
                                    className="d-inline-block align-text-top"
                                />
                                User1
                            </a>

                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img
                                            src="https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
                                            alt="Logo"
                                            style={imageStyle}
                                            className="d-inline-block align-text-top"
                                        />
                                        User2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <img
                                            src="https://yt3.ggpht.com/a/AATXAJyAjXWhg85XlBUBufDpYQ7zB7GIiIlg9js4_wCoFA=s900-c-k-c0xffffffff-no-rj-mo"
                                            alt="Logo"
                                            style={imageStyle}
                                            className="d-inline-block align-text-top"
                                        />
                                        User3
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Add Another Account
                                    </a>
                                </li>
                            </ul>
                        </li >
                    </div>

                </div>
            </nav>

        </div>
    )
}


/*export function Navbar() {
    return (
        <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Users
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Campaign
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Tables
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href='#'>
                            List
                        </a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search for username"
                        aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>


            </div>
        
    )
}*/