import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpcomingEvents from './Components/UpcomingEvents';



function App() {
  return (
    <>
    <Router>
      <>
        <Navbar />
        
      </>
    </Router>
    <UpcomingEvents />
    <AboutUs/>
    
    
   </>
  
  );
}

export default App;
