import BackendTest from "./Components/Deploy/BackendTest";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShelterHome from "./pages/shelter/ShelterHome";
import AdopterHome from "./pages/adopter/AdopterHome.jsx";
import Home from "./pages/Home";
import CreateProfile from "./pages/shelter/CreateProfile";
import SwipeProfiles from "./pages/adopter/SwipeProfiles.jsx";

export default function App() {
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    const getApiResponse = async () => {
      const response = await fetch("/api");
      const responseJson = await response.text();
      setApiResponse(responseJson);
    };
    getApiResponse();
  }, []);

  return (
    <>
      <div>
        <BackendTest apiResponse={apiResponse} />
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='ShelterHome' element={<ShelterHome />} />
          <Route exact path='CreateProfile' element={<CreateProfile />} />
          <Route exact path='AdopterHome' element={<AdopterHome />} />
          <Route exact path='SwipeProfiles' element={<SwipeProfiles />} />
        </Routes>
      </Router>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
