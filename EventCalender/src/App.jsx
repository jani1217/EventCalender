import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import { SearchBar } from './Components/SearchBar';
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
    <div className="App">
    <div className='search-bar-container'>
      <SearchBar />
    </div>
  </div>
    <UpcomingEvents />
    <AboutUs/>
    
    
   </>
  
  );
}

export default App;
