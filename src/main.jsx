import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DentistContext } from "./components/context/DentistContext.jsx";
import { DentistProvider } from "./components/context/DentistContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <DentistProvider>
    <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
  </DentistProvider>
);
