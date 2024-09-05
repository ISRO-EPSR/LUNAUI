import React, { Fragment } from "react";
import Menu from "./Menu";
function Enahnce() {
    return (
        <Fragment>
            <div>
                <Menu />
                <section id="main" className="container-fluid">
                    <div id="input" className="input col-8 rounded">
                        <div id="primary-text">
                            <div id="dragText">Drag &amp; Drop</div>
                            <span className="browseBtn">or Browse</span>
                            <input className="input" type="file" hidden />
                            <div className="desc">Only Supports JPG, PNG, JPEG</div>
                        </div>
                        <div id="secondary-text">
                            <div className="loader" />
                            <br />
                            <p>Extracting Text From your File</p>
                        </div>
                    </div>
                    {/* ******************************************************* */}
                </section>
                <section id="Process-modal">
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Extracted Text</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <textarea className="modal-body" user-select="false" defaultValue={""} />
                                <div className="modal-footer">
                                    <button type="button" id="copyBtn" className="btn copyBtn btn-secondary" data-bs-dismiss="modal">
                                        Copy
                                    </button>
                                    <button type="button" className="btn downloadBtn btn-primary">
                                        Download File <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8043 15.021 15.413 15.413C15.021 15.8043 14.55 16 14 16H2ZM8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="notification">
                    <div className=" btn btn-success copybox">Text Copied</div>
                </section>
                <section id="info" className="container-fluid bg-black">
                    <div className="container">
                        <h2 className>How this amazing technology works ?</h2>
                        <hr />
                        <p>
                            In today’s world, Deep learning have comes into play in which model
                            learns to perform classification tasks directly from images, text, or
                            sound. Deep learning models can achieve state-of-the-art accuracy,
                            sometimes exceeding human-level performance. Models are trained by
                            using a large set of labeled data and neural network architectures
                            that contain many layers.
                        </p>
                        <br />
                        <br />
                        <h2 className>What is OCR ?</h2>
                        <hr />
                        <p>
                            OCR is a technology that analyzes the text of a page and turns the
                            letters into code that may be used to process information. OCR is a
                            technique for detecting printed or handwritten text characters inside
                            digital images of paper files, such as scanning paper records (optical
                            character recognition). OCR systems are hardware and software systems
                            that turn physical documents into machine-readable text.
                        </p>
                        <br />
                        <br />
                        <h2 className>How to use it ?</h2>
                        <hr />
                        <ul>
                            <li className="fs65">
                                Click on the upload button or drag the file you want to get text
                                extracted on the page.
                            </li>
                            <li className="fs-6">
                                The upload stage will be started and image will be uploaded on
                                server to perform the required operations
                            </li>
                            <li className="fs-6">
                                Now conversion process has started to extract the text.
                            </li>
                            <li className="fs-6">
                                A dialogue box will appear, in which the extracted text is present.
                            </li>
                            <li className="fs-6">
                                Now you can either directly copy the text to clipboard by apprroving
                                the permission to access your clipboard.
                            </li>
                            <li className="fs-6">
                                Or you can also download the extracted text into diffrent formats as
                                required.
                            </li>
                        </ul>
                    </div>
                </section>
                {/* FOOTER */}
                <footer className="container">
                    <p className="float-end"><a href="#" className="text-black">Back to top</a></p>
                    <p>
                        © 2022–2023 Karan Kumar, A Galgotia's University Student ·
                    </p>
                </footer>
            </div>

        </Fragment>
    )
}
export default Enahnce;