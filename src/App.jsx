import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admission from './components/Admission';
import AdmissionForm from './components/AdmissionForm';
import ContactUs from "./components/ContactUs"; // Import your ContactUs component

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />           {/* Home page */}
            <Route path="/Admission" element={<Admission />} /> {/* Admission page */}
            <Route path="/AboutUs" element={<AboutUs />} /> {/* About Us page */}
            <Route path="/academics" element={<Academics />} /> {/* About Us page */}
            <Route path="/admission-form" element={<AdmissionForm />} /> {/* Admission Form route */}
            <Route path="/contactus" element={<ContactUs />} /> {/* Contact Us page */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
