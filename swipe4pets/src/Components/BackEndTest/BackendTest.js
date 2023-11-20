import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function BackendTest({ apiResponse, setApiResponse }) {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getApiResponse = async () => {
            const response = await fetch("/api");
            const responseJson = await response.json();
            if (responseJson) {
                setApiResponse(responseJson);
                setLoading(false);
            }
        };

        setLoading(true);
        getApiResponse()
            .catch(console.error);
    }, [setApiResponse]);

    return (
        <div class="center">
            {loading === false ? 
                <div>
                    <h1>{apiResponse.backend}</h1>
                    <h2>A sample pet gender: {apiResponse.pet_gender}</h2>
                </div>
                : <h1>Loading... <Spinner></Spinner></h1>}
            <Link to="/"><button>Return To Home Page</button></Link>
        </div>
    )
}