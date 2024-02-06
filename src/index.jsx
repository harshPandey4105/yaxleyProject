import React from "react";
import ReactDOMClient from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/Home";
import Services from "./pages/Services";
import CountryInfo from "./pages/CountryInfo";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import USAPage from "./pages/UsaCountry";
import Hero from "./components/HeroSection/hero";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
   <BrowserRouter>
      <Navbar />
      <Hero/>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/services" element={<Services />} />
         <Route path="/countryInfo" element={<CountryInfo />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/events" element={<Events />} />
         <Route path="/usacountry" element={<USAPage />} />
      </Routes>
      <Footer />
   </BrowserRouter>
);



