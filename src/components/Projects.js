import React from "react";

import playlist from "./assets/PlaylistMania.png";
import cityBike from "./assets/CityBike1.png";
import employeeRoster from "./assets/EmployeeRoster.png";
import portfolio from "./assets/portfolioScreenshot.png";
import ecommerce from "./assets/backendScreenshot.png";
import notes from "./assets/NoteTaker.png";

function Projects() {
  // Project Data
  const projectData = [
    {
      id: "1",
      title: "Playlist Mania",
      image: playlist,
      description:
        "Tired of listening to the same chart toppers that play on repeat? Looking for new music? Welcome to Playlist Mania. Here you will be able to search for an artist and explore new songs to add to your favorites and generate your own playlist. The search results will give you samples to listen to so you can decide if you like it before you download it. (Cloud storage is precious these days!) You will need to login and create an account as well.",
      github: "https://github.com/gaughanln/PlaylistMania",
      website: "https://playlist-mania-gp2.herokuapp.com/",
    },
    {
      id: "2",
      title: "CityBike Finder",
      image: cityBike,
      description:
        "If you enjoy traveling the great outdoors then CityBike Finder is for you. Search whatever city you are visiting and get a list of local CityBikes along with the local weather to plan your perfect day out!",
      github: "https://github.com/LemonDropping/city-bike-proj",
      website: "https://lemondropping.github.io/city-bike-proj/",
    },
    {
      id: "3",
      title: "Portfolio Reworked",
      image: portfolio,
      description:
        "This is my second attempt at creating and playing around with my portfolio, this time using materialize + CSS to style. Materialize was used for the CityBike project which I did not get to explore that part as I worked on the Javascript. I wanted to continue learning new programs so I took a stab at this.",
      github: "https://github.com/gaughanln/Gaughanln-Portfolio",
      website: "https://gaughanln.github.io/Gaughanln-Portfolio/#project1",
    },
    {
      id: "4",
      title: "Employee Roster",
      image: employeeRoster,
      description:
        "This project incorporates working in the command line to create and edit an employee database that in turn can be produced via html. The project was not deployed to a live website.",
      github: "https://github.com/gaughanln/employeeRoster",
      website: null,
    },
    {
      id: "5",
      title: "Note Taker",
      image: notes,
      description:
        "This application is used to write and save notes using express.js back end and will save and retrieve note data from the JSON file. This application was deployed through Heroku.",
      github: "https://github.com/gaughanln/noteTaker",
      website: "https://gaughanlnnotesaver.herokuapp.com/",
    },
    {
      id: "6",
      title: "Backend eCommerce",
      image: ecommerce,
      description:
        "Another employee database type application. You can view all employees, their position within the company, salary, manager, department, and more. If any edits need to be made, they can be done so within the command line. Main concept of this project was to successfully create, update, and delete data in the database when testing API POST, PUT, and DELETE. The project uses Sequelize, Mysql2, and dotenv. The project was not deployed to a live website.",
      github: "https://github.com/gaughanln/BackEnd_E-Commerce",
      website: null,
    },
  ];

  // Project cards
  return (
    <>
      <div className="row">
        <div className="col-4 d-none d-md-block">
          <div id="list-example" className="list-group">
            {projectData.map((project) => (
              <a
                className="list-group-item list-group-item-action rounded-pill"
                href={`#${project.id}`}
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>

        <div className="col-8 project-box">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabindex="0"
          >
            {projectData.map((project) => (
              <div id={project.id} className="card text-center">
                <div className="row">
                  <div className="col-md-7">
                    <img
                      src={project.image}
                      className="project-images rounded"
                      alt={project.title}
                    />
                  </div>
                  <div className="col-md-5">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.github}
                      className="project-links rounded-pill"
                    >
                      github
                    </a>

                    {project.website && (
                      <a
                        href={project.website}
                        className="project-links rounded-pill"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
