import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpcomingEvents from './Components/UpcomingEvents';

const Home = () => <div>Home Component</div>;
const Clubs = () => <div>Clubs Component</div>;
const AboutUs = () => <div>About Us Component</div>;

function App() {
  return (
    <>
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Define your routes using the Route component */}
          <Route path="/" element={<Home />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Add more routes as needed */}
        </Routes>
        
      </>
    </Router>
    <UpcomingEvents />
    
    
   </>
  
  );
}

export default App;
