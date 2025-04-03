import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
// import About from './components/About';
//import Projects from './components/Projects';
import ProjectsUpdated from './components/ProjectsUpdated';
import Contact from './components/Contact';
import Home from './components/Home';
import Resume from './components/Resume'
// import all components

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'ProjectsUpdated') {
      return <ProjectsUpdated />;
    }  if (currentPage === 'Resume') {
      return <Resume />;
    } return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer />
    </div>
  );
}

export default App;

//this is where to tell the app what and where to return
