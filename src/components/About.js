import React from "react";
import aboutPhoto from "./assets/gaughanln.png";

function About() {
  return (
    <div className="container about-container">
      <div className="row h-100">
        <div className="col-md-6 my-auto text-center">
          <img src={aboutPhoto} className="about-photo" alt="Lindsey Gaughan" />
        </div>

        <div className="col-md-6 my-auto box rounded d-flex justify-content-evenly">
          <p className="about-me quote-wrapper text-center">
            I am an aspiring Full Stack Web Developer/Software Engineer with a
            background in Marketing, Project Management and Graphic Design. I
            have a creative eye that translates through my previous experience
            directly into Web Development. I'm passionate about learning and
            growing, with extreme attention to detail, which provides dedication
            to any project.
            <br/>
            <br/>
            When I'm not sitting in front of the computer you can usually find me at the gym, plant shopping, hanging with friends or traveling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
