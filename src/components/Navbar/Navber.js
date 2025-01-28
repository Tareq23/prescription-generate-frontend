import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


import "./Navber.css";
import { useAuth } from "../../context/AuthContext";

const Navber = () => {

    const { handleLogout, isLogin } = useAuth();
    const [logedIn, setLogedIn] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    P-Generator
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/report">
                                Report
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/drug-info">
                                Drug Info
                            </Link>
                        </li>
                        <li>
                            {
                                isLogin? (<a className="nav-link" onClick={handleLogout}>Logout</a>) : (<Link className="nav-link" to="/auth/login">
                                    Login
                                </Link>)
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navber;
