//The App.js file will integrate the PartnerWithUs component within the main application
import React from 'react';
import './App.css';                 // Import general App styles
import PartnerWithUs from './components/PartnerWithUs';  // Import the PartnerWithUs component

function App() {
  return (
    <div className="App">
      {/* Header or other components can go here */}
      
      <PartnerWithUs />              {/* Render the PartnerWithUs component */}

      {/* Footer or additional components */}
    </div>
  );
}

export default App;
