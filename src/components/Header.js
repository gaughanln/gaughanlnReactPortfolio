import React from 'react';
import namepng from './assets/name.png'

function Header({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar- pt-3"> 
    {/*     // TODO update nav class - the pt-3 is bootstraps padding utility
 */}
    <a class="navbar-brand">
      {currentPage !== 'Home' && 
      <img src= {namepng} width="300" height="125" alt="Lindsey Gaughan" />
    }
    </a>
    {/* <!-- TODO update links, color and size --> */}
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#home" onClick={() => handlePageChange('Home')}>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about" onClick={() => handlePageChange('About')}>About me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects" onClick={() => handlePageChange('Projects')}>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
      </li>
      <li class="nav-item">

        {/* // TODO <!-- make this bold & link to downloadable pdf --> */}
        <a class="nav-link" href="#">Resume</a>
      </li>
    </ul>
  </nav>

    )
}

export default Header