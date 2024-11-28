import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Sponsors from './components/Sponsors/Sponsors';
import FAQ from './components/FAQ/FAQ';
import Location from './components/Location/Location';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div id="home">
          <Homepage />
        </div>

        <div id="aboutus">
          <AboutUs />
        </div>

        <div id="sponsors">
          <Sponsors />
        </div>


        <div id="faq">
          <FAQ />
        </div>

        <div id="location">
          <Location />
        </div>

        <div id="meettheteam">
          <MeetTheTeam />
        </div>

        <div id="contactus">
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
