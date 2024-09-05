import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Menu() {
    return (
        <Fragment>
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><a className="navbar-brand " href="#"><b>LUNA</b></a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="nav nav-pills">
                                <li className="nav-item "><Link to="/" className="nav-link active bg-black" aria-current="page"><a href="" className="nav-link active bg-black" aria-current="page">Home</a></Link></li>
                                <li className="nav-item"><Link to="/enhance" className="nav-link text-black"><a href="./assets/pages/app.html" className="nav-link text-black">Enhance</a></Link></li>
                                <li className="nav-item"><Link to="/team" className="nav-link text-black"><a href="./assets/pages/teams.html" className="nav-link text-black">Our Team</a></Link></li>
                                <a className="navbar-brand-end" href="https://www.galgotiasuniversity.edu.in/" target="_blank">
                                    <img src="./assets/assets/gu-logo.png" alt="Bootstrap" width={30} height="auto" />
                                </a>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
}
export default Menu