import BackendTest from './Components/Deploy/BackendTest';
import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShelterHome from './pages/shelter/ShelterHome';
import AdopterHome from './pages/adopter/AdopterHome';
import Home from './pages/Home';

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
        <>
            <BackendTest
                apiResponse={apiResponse}
            />
            <Router>
                <Routes>
                    <Route exact path="Home" element={<Home />} />
                    <Route exact path="ShelterHome" element={<ShelterHome />} />
                    <Route exact path="AdopterHome" element={<AdopterHome />} />
                </Routes>
            </Router>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);