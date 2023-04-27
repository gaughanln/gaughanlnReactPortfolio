import React from "react";
import namepnglg from "./assets/name.png";
import myPhoto from "./assets/homePhoto.png";

function Home() {
  return (
    <div>
      <div className="container home-container ">
        <div className="row h-100">
          <div className="col-md-6 my-auto text-center">
            {/* Name image */}
            <img src={namepnglg} className="home-name" alt="Lindsey Gaughan" />

            {/* text box */}
            <div className="my-auto box rounded d-flex about-box justify-content-evenly">
              <p className="about-me quote-wrapper text-center">
                I am an aspiring Full Stack Web Developer/Software Engineer with
                a background in Marketing, Project Management and Graphic
                Design. I have a creative eye that translates through my
                previous experience directly into Web Development. I'm
                passionate about learning and growing, with extreme attention to
                detail, which provides dedication to any project.
                <br />
                <br />I am ready to create something that will make the world
                awesome
              </p>
            </div>
          </div>
          <div className="col-md-6 me-auto">
            {/* my image */}
            <img src={myPhoto} className="home-photo" alt="Lindsey Gaughan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
