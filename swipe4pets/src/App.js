import BackendTest from './Components/Deploy/BackendTest';
import ReactDOM from "react-dom/client";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShelterHome from './pages/shelter/ShelterHome';
import AdopterHome from './pages/adopter/AdopterHome';
import Home from './pages/Home';
import CreateProfile from './pages/shelter/CreateProfile';
import Login from './pages/Login';
import SignupPt1 from './pages/signup/SignupPt1';
import ShelterSignup from './pages/signup/ShelterSignup';
import AdopterSignUp from './pages/signup/AdopterSignup';

export default function App() {
    const [apiResponse, setApiResponse] = useState({});

    useEffect(() => {
        const getApiResponse = async () => {
            const response = await fetch("/api");
            const responseJson = await response.text()
            setApiResponse(responseJson)
        }
        getApiResponse();
    }, [])

    return (
        <>
            <div>
                <BackendTest
                    apiResponse={apiResponse}
                />
            </div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="ShelterHome" element={<ShelterHome />} />
                    <Route exact path="CreateProfile" element={<CreateProfile />} />
                    <Route exact path="AdopterHome" element={<AdopterHome />} />
                    <Route exact path = "Login" element = {<Login />} />
                    <Route exact path = "Signup" element = {<SignupPt1 />} />
                    <Route exact path= "sheltersignup" element = {<ShelterSignup />} />
                    <Route exact path= "adoptersignup" element = {<AdopterSignUp />} />
                </Routes>
            </Router>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);