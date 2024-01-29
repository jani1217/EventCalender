import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import { SearchBar } from './Components/SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpcomingEvents from './Components/UpcomingEvents';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <div className="heading-container">
            <h1 className="text-6xl font-extrabold text-black mb-4 mt-8 ">UPCOMING EVENTS</h1>
            
          </div>
        </>
      </Router>

      
      <div className=' m-12 ml-40 flex flex-col justify-center max-w-lg'>
        <SearchBar />
      </div>
      

      <>
        <section className="container mx-auto flex flex-col justify-between gap-2 pb-[20rem]">
          <div className="w-full  px-[2.5rem]">
            <div className="about-cards flex gap-10 flex-col md:flex-row">
              <UpcomingEvents />
            </div>
          </div>
        </section>
      </>
      <AboutUs />
      <div className='flex items-center justify-center'>
        <Login/>
      </div>
      
    </>
  );
}

export default App;
