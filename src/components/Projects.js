import React from "react";
import playlist from "./assets/PlaylistMania.png";
import cityBike from "./assets/CityBike1.png";
import employeeRoster from "./assets/EmployeeRoster.png";
import portfolio from "./assets/portfolioScreenshot.png";
import ecommerce from "./assets/backendScreenshot.png";
import notes from "./assets/NoteTaker.png";

const projects =[
  {
  title: 'Playlist Mania',
  image: playlist,
  description: 'Tired of listening to the same chart toppers that play on repeat? Looking for new music? Welcome to Playlist Mania. Here you will be able to search for an artist and explore new songs to add to your favorites and generate your own playlist. The search results will give you samples to listen to so you can decide if you like it before you download it. (Cloud storage is precious these days!) You will need to login and create an account as well.',
  github: 'https://github.com/gaughanln/PlaylistMania',
  website: 'https://playlist-mania-gp2.herokuapp.com/',
},
{
  title: 'CityBike Finder',
  image: cityBike,
  description: 'If you enjoy traveling the great outdoors then CityBike Finder is for you. Search whatever city you are visiting and get a list of local CityBikes along with the local weather to plan your perfect day out!',
  github: 'https://github.com/LemonDropping/city-bike-proj',
  website: 'https://lemondropping.github.io/city-bike-proj/',
},
{
  title: 'Playlist Mania',
  image: playlist,
  description: '',
  github:
  website:
},
{
  title: 'Playlist Mania',
  image: playlist,
  description: '',
  github:
  website:
},
{
  title: 'Playlist Mania',
  image: playlist,
  description: '',
  github:
  website:
},
{
  title: 'Playlist Mania',
  image: playlist,
  description: '',
  github:
  website:
}]












function Projects() {
  return (
    <>
      {/* carousel buttons that direct slides*/}
      <div id="carouselExampleCaptions carousel" className="carousel slide ">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>

        {/* carousel pages */}
        <div className="carousel-inner">
          {/* Playlist Mania */}
          <div className="carousel-item rounded active">
            <img
              src={playlist}
              className="d-block w-100"
              alt="PlaylistMania Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h3>Playlist Mania</h3>
              <p>
                Tired of listening to the same chart toppers that play on
                repeat? Looking for new music? Welcome to Playlist Mania. Here
                you will be able to search for an artist and explore new songs
                to add to your favorites and generate your own playlist. The
                search results will give you samples to listen to so you can
                decide if you like it before you download it. (Cloud storage is
                precious these days!) You'll need to login and create an account
                as well - Music isn't free! 😉
              </p>
              <a className="project-links" href="https://github.com/gaughanln">
                Github Repo
              </a>
              <a className="project-links" href="https://github.com/gaughanln">
                Website
              </a>
            </div>
          </div>

          {/* city Bike */}
          <div className="carousel-item rounded">
            <img
              src={cityBike}
              className="d-block w-100 "
              alt="CityBike Finder Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h3>CityBike Finder</h3>
              <p>
                If you enjoy traveling the great outdoors then CityBike Finder
                is for you. Search whatever city you're visiting and get a list
                of local CityBikes along with the local weather to plan your
                perfect day out!
              </p>
              <a
                className="project-links"
                href="https://github.com/LemonDropping/city-bike-proj"
              >
                Github Repo
              </a>
              <a
                className="project-links"
                href="https://lemondropping.github.io/city-bike-proj/"
              >
                Website
              </a>
            </div>
          </div>

          {/* 2nd attempt at portfolio */}
          <div className="carousel-item rounded">
            <img
              src={portfolio}
              className="d-block w-100 "
              alt="Lindsey Gaughan Portfolio Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h3>Portfolio using Materialize</h3>
              <p>
                This is my second attempt at creating and playing around with my
                portfolio, this time using materialize + CSS to style.
                Materialize was used for the CityBike project which I didn't get
                to explore that part as I worked on the Javascript. I wanted to
                continue learning new programs so I took a stab at this.
              </p>
              <a
                className="project-links"
                href="https://github.com/gaughanln/Gaughanln-Portfolio"
              >
                Github Repo
              </a>
              <a
                className="project-links"
                href="https://gaughanln.github.io/Gaughanln-Portfolio/#project1"
              >
                Website
              </a>
            </div>
          </div>

          {/* Employee Roster */}
          <div className="carousel-item rounded">
            <img
              src={employeeRoster}
              className="d-block w-100 "
              alt="Employee Roster Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h3>Employee Roster</h3>
              <p>
                This project incorporates working in the command line to create
                and edit an employee database that in turn can be produced via
                html. The project was not deployed to a live website.
              </p>
              <a
                className="project-links"
                href="https://github.com/gaughanln/employeeRoster"
              >
                Github Repo
              </a>
            </div>
          </div>

          {/* Note Taker */}
          <div className="carousel-item rounded">
            <img
              src={notes}
              className="d-block w-100 "
              alt="Note taker application Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h3>Note Taker</h3>
              <p>
                This application is used to write and save notes using
                express.js back end and will save and retrieve note data from
                the JSON file. This application was deployed through Heroku.
              </p>
              <a
                className="project-links"
                href="https://github.com/gaughanln/noteTaker"
              >
                Github Repo
              </a>
              <a
                className="project-links"
                href="https://gaughanlnnotesaver.herokuapp.com/"
              >
                Website
              </a>
            </div>
          </div>

          {/* backend ecommerceProject */}
          <div className="carousel-item rounded">
            <img
              src={ecommerce}
              className="d-block w-100 "
              alt="Backend eCommerce Screenshot"
            />

            <div className="carousel-caption carousel-caption-bottom  d-md-block">
              <h5>Backend eCommerce</h5>
              <p>
                Another employee database type application. You can view all
                employees, their position within the company, salary, manager,
                department, and more. If any edits need to be made, they can be
                done so within the command line. Main concept of this project
                was to successfully create, update, and delete data in the
                database when testing API POST, PUT, and DELETE. The project
                uses Sequelize, Mysql2, and dotenv. The project was not deployed
                to a live website.
              </p>
              <a
                className="project-links"
                href="https://github.com/gaughanln/BackEnd_E-Commerce"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>

        <div className="carousel-control-wrapper">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
