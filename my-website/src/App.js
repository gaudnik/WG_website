import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Tools from './Components/Tools';
import Experience from './Components/Experience';
import Code from './Components/Code';
import Contact from './Components/Contact';
import SentMessage from './Components/SendMessage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
    <div className='background__container'>
      <Menu />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path='/tools' element={<Tools/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Code/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/send_message' element={<SentMessage/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
};

export default App;
