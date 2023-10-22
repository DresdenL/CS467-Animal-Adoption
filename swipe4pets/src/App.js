import BackendTest from './Components/Deploy/BackendTest';
import { useState, useEffect } from 'react';

export default function App() {
    const [apiResponse, setApiResponse] = useState({});

    useEffect(() => {
        const getApiResponse = async () => {
            const response = await fetch("/api");
            const responseJson = await response.json()
            setApiResponse(responseJson)
        }
        getApiResponse();
    }, [])

    return (
        <div>
            <h1>{"React Frontend is active!"}</h1>
            <BackendTest
                apiResponse={apiResponse}
            />
        </div>
    )
}
