import React, { useState } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const [image, setImage] = useState({
    url: null,
    message: "Sorry can't recognize this as a car!"
  });

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    console.log("Dropped file:", file);

    if (file && file.type.match(/^image\//)) {
      setImage({ ...image, url: URL.createObjectURL(file) });
      alert("TRICKED YOU!!! Just hacked all your data 😂😂😂 - Paul Henderson");
      // uploadImage(file); // Uncomment this when you're ready to upload the image
    } else {
      alert("Invalid file type. Please drop an image file.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);

    if (file && file.type.match(/^image\//)) {
      setImage({ ...image, url: URL.createObjectURL(file) });
      alert("TRICKED YOU!!! Just hacked all your data 😂😂😂 - Paul Henderson");
      // uploadImage(file); // Uncomment this when you're ready to upload the image
    } else {
      alert("Invalid file type. Please select an image file.");
    }
  };

  return (
    <div className="App">
      <nav>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <h1>What car are you looking at?</h1>
      <div className="center-container">
        <div
          className="drop-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="animation-container">
            <div className="car" />
            <div className="arrow" />
          </div>
          {image.url && (
            <div className="image-preview">
              <img src={image.url} alt="Dropped" />
              <p>{image.message}</p>
            </div>
          )}
          <p>Drag and drop a photo here</p>

          <label className="upload-button" htmlFor="file-upload">
            Or click here to upload
          </label>

          <input
            id="file-upload"
            type="file"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
