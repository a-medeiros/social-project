import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">TT</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/">
                            <span className="navbar-link">Home</span>
                        </Link>
                        <Link to="/new-post">
                            <span className="navbar-link">Novo post</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;