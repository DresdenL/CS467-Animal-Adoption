import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShelterHome from './pages/shelter/ShelterHome';
import AdopterHome from './pages/adopter/AdopterHome';
import Home from './pages/Home';
import CreateProfile from './pages/shelter/CreateProfile';
import Login from './pages/Login';
import SignupPt1 from './pages/signup/SignupPt1';
import ShelterSignup from './pages/signup/ShelterSignup';
import AdopterSignUp from './pages/signup/AdopterSignup';
import SwipeProfiles from "./pages/adopter/SwipeProfiles.jsx";
import BackendTest from "./Components/BackEndTest/BackendTest";


export default function App() {
  const [apiResponse, setApiResponse] = useState({});

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="ShelterHome" element={<ShelterHome />} />
          <Route exact path="CreateProfile" element={<CreateProfile />} />
          <Route exact path="AdopterHome" element={<AdopterHome />} />
          <Route exact path='SwipeProfiles' element={<SwipeProfiles />} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="Signup" element={<SignupPt1 />} />
          <Route exact path="sheltersignup" element={<ShelterSignup />} />
          <Route exact path="adoptersignup" element={<AdopterSignUp />} />
          <Route exact path="backendtest" element={<BackendTest
            apiResponse={apiResponse}
            setApiResponse={setApiResponse} />} />
        </Routes>
      </Router>
    </div>
  );
}
