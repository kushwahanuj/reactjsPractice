import React from 'react'
import Home from "./Components/Home";
import Header from "./Components/Header";
import About from './Components/About';
import Contact from "./Components/Contact";
import ContactData from "./Components/ContactData";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";
import Mobile from "./Components/Catalog/Categories/Mobile";
import Productpage from "./Components/Catalog/Product/Productpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact contacttitle='Contact us' />} />
          <Route path="/about" element={<About />} />
          <Route path="/contdata" element={<ContactData />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/mobiles/product/:productId" element={<Productpage />} />
          <Route path="/*" element={<p>Page Not Found</p>} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}