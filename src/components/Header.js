import React from "react";
import namePNG from "./assets/name.png";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <nav className="navbar navbar- pt-3 ">
        {/* name logo in nav bar */}
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

        <ul className="nav justify-content-center ">
          {/* home */}
          <li className="nav-item ">
            <a
              className="nav-link active rounded-pill"
              aria-current="true"
              href="#home"
              onClick={() => handlePageChange("Home")}
            >
              Home
            </a>
          </li>

          {/* projects */}
          <li className="nav-item">
            <a
              className="nav-link rounded-pill"
              href="#projects"
              onClick={() => handlePageChange("Projects")}
            >
              Projects
            </a>

            {/* contact */}
          </li>
          <li className="nav-item">
            <a
              className="nav-link rounded-pill"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>

          {/* resume */}

          <li className="nav-item">
            <a
              className="nav-link resume rounded-pill"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
            >
              Resume 💁🏼‍♀️
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
