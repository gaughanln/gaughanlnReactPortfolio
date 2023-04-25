import React from "react";
import skills from "./assets/skills.png"

const resumeLink = ('https://www.dropbox.com/s/0rf569rhwhkq6fg/Lindsey%20Gaughan%20Resume%2023.pdf?dl=0');


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

    <button type="button" className="btn btn-lg resume rounded-pill">Download Resume</button>

    <p className="box rounded resume-skills text-center">
            I am an aspiring Full Stack Web Developer/Software Engineer with a
            background in Marketing, Project Management and Graphic Design. I
            have a creative eye that translates through my previous experience
            directly into Web Development. I'm passionate about learning and
            growing, with extreme attention to detail, which provides dedication
            to any project.
            <br/>
            <br/>
            Fun fact: I've recently become an obsessive plant mom
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