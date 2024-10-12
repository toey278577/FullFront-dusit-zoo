import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './imges/dusit-zoo-logo.png';

import Navbar from './components/navbar/navbar_cpnt';
import Footer from './components/footer/footer_cpnt';

import Home from './components/home/home_cpnt';
import Animals from './components/animal/animal_list_cpnt';
import AnimalDetail from './components/animal/animal_detail_cpnt'
import About from './components/about/about_cpnt';
import Map from './components/map/map_cpnt';
import Contract from './components/contract/contract_cpnt';

function App() {
  return (
    <BrowserRouter>
      <head>
        <link rel="icon" href={Logo} />
      </head>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:animalName" element={<AnimalDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
