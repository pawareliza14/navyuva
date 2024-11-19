import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import Startups from "./pages/Startups.jsx";
import Patents from "./pages/Patents.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/patents" element={<Patents />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
