import React, { useState, useEffect } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Event 1',
      image: import.meta.env.BASE_URL + 'src/assets/event1.jpg',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2',
      image: import.meta.env.BASE_URL + 'src/assets/event2.jpg',
      description: 'Description for Event 2',
    },
    {
      title: 'Event 3',
      image: import.meta.env.BASE_URL + 'src/assets/event3.jpg',
      description: 'Description for Event 3',
    },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 2000); // Automatically transition every 2 seconds

    return () => clearInterval(intervalId);
  }, [events.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const currentEvent = events.length ? events[currentIndex] : null;

  return (
    <div className="upcoming-events-slider">
      <button className="nav-button" onClick={handlePrev}>&lt;</button>
      {currentEvent && (
        <div className="event">
          <img src={currentEvent.image} alt={currentEvent.title} />
          <h2>{currentEvent.title}</h2>
          <p>{currentEvent.description}</p>
        </div>
      )}
      <button className="nav-button" onClick={handleNext}>&gt;</button>
    </div>
  );
};
export default UpcomingEvents;
