import React, { Fragment, useState, useRef } from "react";
import Menu from "./Menu";

function Enhance() {
    const [dragging, setDragging] = useState(false); // State for drag-and-drop status
    const [file, setFile] = useState(null); // State for uploaded file
    const fileInputRef = useRef(null); // Reference for the hidden file input

    // Function to handle file drop
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            handleFileUpload(files[0]); // Process the first file dropped
        }
    };

    // Function to handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true); // Set dragging state to true when dragging over the drop zone
    };

    // Function to handle drag leave event
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false); // Reset dragging state when leaving the drop zone
    };

    // Function to handle file input change
    const handleInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file); // Process the file selected via file input
        }
    };

    // Function to handle file upload logic
    const handleFileUpload = (file) => {
        console.log("File uploaded:", file); // Log the uploaded file
        setFile(file); // Set the uploaded file state
        // Implement your custom logic to handle the uploaded file (e.g., display or process the file)
    };

    // Function to open file dialog when "Browse" button is clicked
    const handleBrowseClick = () => {
        fileInputRef.current.click(); // Trigger click event on hidden file input
    };

    return (
        <Fragment>
            <div>
                <Menu />
                <section id="main" className="container-fluid">
                    <div
                        id="input"
                        className={`input col-8 rounded ${dragging ? "dragging" : ""}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <div id="primary-text">
                            <div id="dragText">Drag &amp; Drop</div>
                            <span className="browseBtn" onClick={handleBrowseClick}>or Browse</span>
                            <input
                                className="input"
                                type="file"
                                hidden
                                ref={fileInputRef}
                                onChange={handleInputChange}
                            />
                            <div className="desc">Only Supports JPG, PNG, JPEG</div>
                        </div>
                        <div id="secondary-text">
                            <div className="loader" />
                            <br />
                            <p>Extracting Text From your File</p>
                        </div>
                    </div>
                </section>

                {/* The rest of your JSX remains unchanged */}
                {/* ... */}
            </div>
        </Fragment>
    );
}

export default Enhance;
