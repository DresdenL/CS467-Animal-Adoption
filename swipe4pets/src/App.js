import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShelterHome from './pages/shelter/ShelterHome';
import DeleteAlert from './pages/shelter/DeleteAlert';
import ManageShelterAccount from './pages/shelter/ManageShelterAccount';
import ManageProfile from './pages/shelter/ManageProfile';
import ViewProfile from './pages/shelter/ViewProfile';
import AdopterHome from './pages/adopter/AdopterHome';
import Home from './pages/Home';
import CreateProfile from './pages/shelter/CreateProfile';
import Login from './pages/Login';
import SignupPt1 from './pages/signup/SignupPt1';
import ShelterSignup from './pages/signup/ShelterSignup';
import AdopterSignUp from './pages/signup/AdopterSignup';
import SwipeProfiles from "./pages/adopter/SwipeProfiles.jsx";
import BackendTest from "./Components/BackEndTest/BackendTest";
import SignupComplete from './pages/signup/SignupComplete';


export default function App() {
  const [apiResponse, setApiResponse] = useState({});

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="ShelterHome" element={<ShelterHome />} />
          <Route exact path="ManageShelterAccount" element={<ManageShelterAccount />} />
          <Route exact path="DeleteAlert" element={<DeleteAlert />} />
          <Route exact path="CreateProfile" element={<CreateProfile />} />
          <Route exact path="ManageProfile" element={<ManageProfile />} />
          <Route exact path="ViewProfile" element={<ViewProfile />} />
          <Route exact path="AdopterHome" element={<AdopterHome />} />
          <Route exact path="SignupComplete" element={<SignupComplete />} />
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
