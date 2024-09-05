import React, { Fragment } from "react";
import Menu from "./Menu";
function Team() {
    return (
        <Fragment>
            <Menu />
            <div>
                <section className="team container">
                    <hr />
                    <br />
                    <h3>Our Team</h3>
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success">Team Leader</strong>
                                    <h3 className="mb-0">Nilesh Kumar Yadav</h3>
                                    <div className="mb-1 text-muted">Aspiring Ai Scientist</div>
                                    <p className="card-text mb-auto">
                                        Handled Backend and lead the Machine learning Team.
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div id="indra-img" className="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Team Member</strong>
                                    <h3 className="mb-0">Vibhor Srivastava</h3>
                                    <div className="mb-1 text-muted">Aspiring Data Scientist</div>
                                    <p className="card-text mb-auto">
                                        Vibhor handled Research part of the project and work side by side
                                        with ML Member.
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div id="karan-img" className="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Team Member</strong>
                                    <h3 className="mb-0">Shivam</h3>
                                    <div className="mb-1 text-muted">Aspiring Machine Learning Engineer</div>
                                    <p className="mb-auto">
                                        Shivam Manages the all Machine learning tasks and helps to manage
                                        backend part too.
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div id="vaibhav-img" className="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Team Member</strong>
                                    <h3 className="mb-0">Bhavya Verma</h3>
                                    <div className="mb-1 text-muted">Software Engineer</div>
                                    <p className="card-text mb-auto">
                                        Bhavya collects all the neccessary content for all the
                                        research purposes.
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div id="ashutosh-img" className="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Team Member</strong>
                                    <h3 className="mb-0">Riya Shukla</h3>
                                    <div className="mb-1 text-muted">Front-End Developer</div>
                                    <p className="mb-auto">
                                        Riya manages all the front-end development part.
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <div id="tarun-img" className="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FOOTER */}
                <footer className="container">
                    <p className="float-end"><a href="#" className="text-black">Back to top</a></p>
                    <p>
                        © 2024–2025 LUNA,ByteClub
                    </p>
                </footer>
            </div>

        </Fragment>
    )
}

export default Team;