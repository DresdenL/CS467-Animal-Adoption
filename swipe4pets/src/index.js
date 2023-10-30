import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import AdopterHomepage from "./Pages/adopter_homepage.jsx";
import SwipeProfiles from "./Pages/swipe_profiles.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AdopterHomepage /> */}
    <SwipeProfiles />
  </React.StrictMode>
);
