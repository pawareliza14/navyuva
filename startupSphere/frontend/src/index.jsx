import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./styles/App.css";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
