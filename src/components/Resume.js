import React from "react";
import skills from "../assets/skills.png";
import resume from "../assets/LindseyGaughanResume25.pdf";

function Resume() {
  const skillsData = [
    {
      id: "1",
      type: "Technical Skills / Software",
      skills:
        "html, CSS, JavaScript, bootstrap, materialize, JSON, CRUD, REST, jQuery, Git, MySQL, MongoDB, Mongoose, Express VS Code, Adobe Creative Suite (Photoshop + Illustrator), Canva, Microsoft Office and Camtasia",
    },
    {
      id: "2",
      type: "Adaptability",
      skills:
        "Proficient working alone or as a team. Able to work on multiple projects at once. Work well under pressure and able to handle tight deadlines.",
    },
    {
      id: "3",
      type: "Communication",
      skills:
        "Takes direction and welcomes feedback. Can convey and present ideas to an audience. Adept presenter and comfortable in front of groups.",
    },
  ];

  return (
    <>
      <div className="container contact-container ">
        <div className="row h-100">
          <div className="col-md-6 my-auto text-center">
            <a href={resume} download="LindseyGaughanResume25" target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-lg resume rounded-pill">
                Download Resume 💾
              </button>
            </a>

            {skillsData.map((skills) => (
              <div key={skills.id}>
                <p className="box rounded resume-skills text-center">
                  {skills.type}
                  <br />
                  <span className="skills">{skills.skills}</span>
                </p>
                <br />
              </div>
            ))}
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
