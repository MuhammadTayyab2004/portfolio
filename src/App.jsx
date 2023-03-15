import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
