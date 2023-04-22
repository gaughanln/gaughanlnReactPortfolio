import React from "react";
import namePNG from "./assets/name.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar- pt-3 ">
      {/*     // TODO update nav class - the pt-3 is bootstraps padding utility
       */}
      <div class="navbar-brand">
        {currentPage !== "Home" && (
          <img src={namePNG} class = "header-logo" width="300" height="125" alt="Lindsey Gaughan" />
        )}
      </div>
      {/* <!-- TODO update links, color and size --> */}
      <ul class="nav justify-content-end ">
        <li class="nav-item ">
          <a
            class="nav-link"
            href="#home"
            onClick={() => handlePageChange("Home")}
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#about"
            onClick={() => handlePageChange("About")}
          >
            About me
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#projects"
            onClick={() => handlePageChange("Projects")}
          >
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#contact"
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </a>
        </li>

        <li class="nav-item">
          {/* // TODO <!-- make this bold & link to downloadable pdf --> */}
          <button type="button" href="/#" class="nav-link btn btn-primary">
            Resume
          </button>
        </li>

        <div class="navbar-brand">
          <li class="nav-item">
            {currentPage !== "Home" && (
              <img
                src={github}
                width="40"
                height="40"
                class="icon-nav"
                alt="github icon"
              />
            )}
          </li>
          </div>

          <div class="navbar-brand">
          <li class="nav-item">
            {currentPage !== "Home" && (
              <img
                src={linkedin}
                width="40"
                height="40"
                class="icon-nav"
                alt="linkedin icon"
              />
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
