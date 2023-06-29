import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import playlist from "../assets/PlaylistMania.png";
import cityBike from "../assets/CityBike1.png";
import employeeRoster from "../assets/EmployeeRoster.png";
import portfolio from "../assets/portfolioScreenshot.png";
import ecommerce from "../assets/backendScreenshot.png";
import notes from "../assets/NoteTaker.png";
import brewtique from "../assets/brewtique.png";

function Projects() {
  const projectData = [
    {
      id: "1",
      title: "Playlist Mania",
      image: playlist,
      description:
        "With Playlist Mania you will be able to search for an artist and explore new songs to add to your favorites and generate your own playlist. The search results will give you samples to listen to so you can decide if you like it before you download it.",
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
      title: "Brew-tique",
      image: brewtique,
      description:
        "This project uses React for the front end, GraphQL with a Node.js and Express.js server, and used MongoDB + Mongoose ODM for the database. The concept is a monthly coffee subscription website that sources new items each month from all over, right to your door. At Brewtique, we specialize in finding and curating the best niche coffee from around the world, so you can experience something new and exciting each morning! ",
      github: "https://github.com/gaughanln/Brew-tique",
      website: "https://brewtique.herokuapp.com",
    },
    {
      id: "4",
      title: "Portfolio Reworked",
      image: portfolio,
      description:
        "My second attempt at creating and playing around with my portfolio, this time using materialize + CSS to style. ",
      github: "https://github.com/gaughanln/Gaughanln-Portfolio",
      website: "https://gaughanln.github.io/Gaughanln-Portfolio/#project1",
    },
    {
      id: "5",
      title: "Employee Roster",
      image: employeeRoster,
      description:
        "This project incorporates working in the command line to create and edit an employee database that in turn can be produced via html. The project was not deployed to a live website.",
      github: "https://github.com/gaughanln/employeeRoster",
      website: null,
    },
    {
      id: "6",
      title: "Note Taker",
      image: notes,
      description:
        "This application is used to write and save notes using express.js back end and will save and retrieve note data from the JSON file. This application was deployed through Heroku.",
      github: "https://github.com/gaughanln/noteTaker",
      website: "https://gaughanlnnotesaver.herokuapp.com/",
    },
    {
      id: "7",
      title: "Backend eCommerce",
      image: ecommerce,
      description:
        "Main concept of this project was to successfully create, update, and delete data in the database. The project uses Sequelize, Mysql2, and dotenv. If any edits need to be made, they can be done so within the command line.",
      github: "https://github.com/gaughanln/BackEnd_E-Commerce",
      website: null,
    },
  ];

  return (
    <>
      <div className="carousel">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
            1560: {
                slidesPerView: 3
            },
        }}
        >
          {projectData.map((project) => (
            <SwiperSlide>
              <div className="text-center">
                <img
                  src={project.image}
                  className="rounded project-pics"
                  alt={project.title}
                />

                <h3 className="text-center project-title">{project.title}</h3>
                <p className>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-links rounded-pill"
                >
                  Github
                </a>
                {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="project-links rounded-pill"
                >
                  Website
                </a>
                  )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

// Project cards
// return (
//   <>
//     <div className="row project-padding">
//       <div className="col-4 d-none d-md-block">
//         <div id="list-example" className="list-group">
//           {projectData.map((project) => (
//             <a
//               className="list-group-item list-group-item-action rounded-pill"
//               href={`#${project.id}`}
//             >
//               {project.title}
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="col-8 project-box">
//         <div
//           data-bs-spy="scroll"
//           data-bs-target="#list-example"
//           data-bs-smooth-scroll="true"
//           className="scrollspy-example"
//           tabindex="0"
//         >
//           {projectData.map((project) => (
//             <div id={project.id} className="card text-center">
//               <div className="row">
//                 <div className="col-md-7">
//                   <img
//                     src={project.image}
//                     className="project-images rounded"
//                     alt={project.title}
//                   />
//                 </div>
//                 <div className="col-md-5">
//                   <h3 className="card-title">{project.title}</h3>
//                   <p className="card-text">{project.description}</p>
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="project-links rounded-pill"
//                   >
//                     github
//                   </a>

//                   {project.website && (
//                     <a
//                       href={project.website}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="project-links rounded-pill"
//                     >
//                       Website
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </>
// );

export default Projects;
