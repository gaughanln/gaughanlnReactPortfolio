import React from "react";
import skills from "./assets/skills.png";

const resumeLink =
  "https://www.dropbox.com/s/0rf569rhwhkq6fg/Lindsey%20Gaughan%20Resume%2023.pdf?dl=0";

// Skills [{
//   technical {[  html, CSS, JavaScript, bootstrap, materialize, JSON, CRUD, REST, jQuery, Git, MySQL, MongoDB, Mongoose, Express, VS Code, Adobe Creative Suite (Photoshop + Illustrator), Canva, Microsoft Office and Camtasia]}

//   },

// }
// ]

function Resume() {
  return (
    <>
      <div className="container contact-container ">
        <div className="row h-100">
          <div className="col-md-6 my-auto text-center">
            <button type="button" className="btn btn-lg resume rounded-pill">
              Download Resume
            </button>

            <p className="box rounded resume-skills text-center">
              Technical Skills / Software
              <br />
              <span class ="skills">html, CSS, JavaScript, bootstrap, materialize, JSON, CRUD, REST,
              jQuery, Git, MySQL, MongoDB, Mongoose, Express VS Code, Adobe
              Creative Suite (Photoshop + Illustrator), Canva, Microsoft Office
              and Camtasia</span>
            </p>
            <br />

            <p className="box rounded resume-skills text-center">
              Adaptability
              <br />
              <ul>
                <span class = "skills">
                <li>Proficient working alone or as a team. </li>
                <li> Able to work on multiple projects at once.</li>
                <li>
                  Work well under pressure and able to handle tight deadlines.
                </li>
                </span>
              </ul>
            </p>

            <br />

            <p className="box rounded resume-skills text-center">
              Communication
              <br />
              <ul> 
                <span class = "skills">
                  <li>
               Takes direction and welcomes feedback.
               </li>
               <li>Can convey and present ideas
              to an audience. </li> 
              <li>Adept presenter and comfortable in front of groups.
              </li>
              </span></ul>
            </p>
          </div>

          <div className="col-md-6">
            <img
              src={skills}
              class="contact-pic visible-lg"
              alt=" skills graphic"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
