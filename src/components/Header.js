import React from "react";
import namePNG from "./assets/name.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar- pt-3 ">
        {/*     // TODO update nav className - the pt-3 is bootstraps padding utility
         */}
        <div className="navbar-brand">
          {currentPage !== "Home" && (
            <img
              src={namePNG}
              className="header-logo"
              width="300"
              height="125"
              alt="Lindsey Gaughan"
            />
          )}
        </div>

        <ul className="nav justify-content-end ">
          {/* home */}
          <li className="nav-item ">
            <a
              className="nav-link"
              href="#home"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </a>
          </li>

          {/* about me */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#about" onClick={() => handlePageChange("About")}>
              About me
            </a>
          </li> */}

          {/* projects */}
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={() => handlePageChange("Projects")}>
              Projects
            </a>

            {/* contact */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={() => handlePageChange("Contact")} >
              Contact
            </a>
          </li>

          {/* resume */}
          {/* this link isn't working?? */}
          <li className="nav-item">
            <a
              className="nav-link resume rounded-pill"
              href="https://www.dropbox.com/s/0rf569rhwhkq6fg/Lindsey%20Gaughan%20Resume%2023.pdf?dl=0"
              target="_blank"
            >
              Resume
            </a>
          </li>

          {/* github icon */}
          {/* <div className="navbar-brand">
            <li className="nav-item">
              {currentPage !== "Home" && (
                <a href="https://github.com/gaughanln" target="_blank">
                  <img
                    src={github}
                    width="40"
                    height="40"
                    className="icon-nav "
                    alt="github icon"
                  />
                </a>
              )}
            </li>
          </div> */}

          {/* linkedin icon */}
          {/* <div className="navbar-brand">
            <li className="nav-item">
              {currentPage !== "Home" && (
                <a
                  href="https://www.linkedin.com/in/gaughanln/"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    width="40"
                    height="40"
                    className="icon-nav"
                    alt="linkedin icon"
                  />
                </a>
              )}
            </li>
          </div> */}
        </ul>
      </nav>

      {/* footer */}
      <div class="container footer-container">
        <footer class="d-flex flex-wrap justify-content-center align-items-center  border-top">
          <a href="https://www.linkedin.com/in/gaughanln/" target="_blank">
            <img
              src={linkedin}
              width="40"
              height="40"
              className="icon-nav"
              alt="linkedin icon"
            />
          </a>

          <a href="https://github.com/gaughanln" target="_blank">
            <img
              src={github}
              width="40"
              height="40"
              className="icon-nav "
              alt="github icon"
            />
          </a>
        </footer>
      </div>
    </>
  );
}

export default Header;
