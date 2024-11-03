import './App.css';

import Homepage from './components/Homepage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Sponsors from './components/Sponsors/Sponsors';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import FAQ from './components/FAQ/FAQ';
import Location from './components/Location/Location';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className="App">
          <Homepage />
          <AboutUs />
          <Sponsors />
          <MeetTheTeam />
          <FAQ />
          <Location />
          <ContactUs />
          <Footer />
      </div>
  );
}

export default App;
