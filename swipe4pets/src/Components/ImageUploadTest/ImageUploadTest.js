import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const ImageUploadTest = () => {

    const [apiResponse, setApiResponse] = useState({ "backend": "" });
    const [instantImagePreview, setInstantImagePreview] = useState("");
    const [uploadedImagePreview, setUploadedImagePreview] = useState("");
    const [fileToUpload, setFileToUpload] = useState("");

    // setUploadedImagePreview whenever we get a new apiResponse
    useEffect(() => {
        setUploadedImagePreview(apiResponse.backend);
    }, [apiResponse]);


    function handleChange(e) {
        setInstantImagePreview(URL.createObjectURL(e.target.files[0]));
        setFileToUpload(e.target.files[0]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const getApiResponse = async () => {
            const formData = new FormData();
            formData.append('file', fileToUpload);

            const response = await fetch('/api/image_upload', {
                method: 'POST',
                body: formData,
            })
            const responseJson = await response.json()
            if (responseJson) {
                setApiResponse(responseJson);
            }
        }
        getApiResponse()
            .catch(console.error);
    }

    return (
        <div class="center">
            <label for="petPic">Image Upload Test</label>
            <br />
            <input type="file" accept="image/*" id="petPic" onChange={handleChange} />

            <br />
            <br />

            <label for="instantImagePreview">Instant image preview</label>
            <br />
            <img height="250px" src={instantImagePreview} id="instantImagePreview" />

            <br />
            <br />

            <button type="button" onClick={handleSubmit}>Upload</button>
            <br />
            <label for="uploadedImagePreview">Uploaded image preview</label>
            <br />
            <img height="250px" src={uploadedImagePreview} id="uploadedImagePreview" />
            <br />
            <h1>{apiResponse.backend}</h1>

            <br />
            <br />

            <Link to="/"><button>Return To Home Page</button></Link>
        </div>
    );
};

export default ImageUploadTest;