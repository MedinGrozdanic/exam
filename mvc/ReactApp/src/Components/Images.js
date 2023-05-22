import {React, Fragment, useState } from 'react';
import axios from 'axios';


export default function Images() {
  const[imageSelected, setImageSelected] = useState(null)
  
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    

    axios.post("https://localhost:7208/api/images", formData)
    .then((response) => {
      console.log(response);
    });
  };
  
  return (
      <div className="Image-Container">
        <h2 id="imageTitle">Bilder</h2>
        <div className="Image-Underline"></div>
        <label for="select-Image">Label Name
        <input type="file" id="select-Image" onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
        />
        </label>
        <button id="submitImage" onClick={uploadImage}>Ladda upp</button>

      </div>
  );
}
