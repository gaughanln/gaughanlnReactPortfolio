import React from "react";
import namepnglg from "./assets/name.png";
import myPhoto from "./assets/homePhoto.png";
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"

function Home() {
  return (
    <div>
      <div className ="container home-container ">
        <div className ="row h-100">
          <div className ="col-md-6 my-auto text-center">
         
            <img src={namepnglg} className ="home-name" alt="Lindsey Gaughan" />

            <div className ="my-auto box rounded d-flex about-box justify-content-evenly">
           
           <p className  = "about-me quote-wrapper text-center">I am an aspiring Full Stack Web Developer/Software Engineer with a background in Marketing, Project Management and Graphic Design. I have a creative eye that translates through my previous experience directly into Web Development. I'm passionate about learning and growing, with extreme attention to detail, which provides dedication to any project.
           <br></br>
           <br></br>
           Fun fact: I've recently become an obsessive plant mom</p>
         
         
           </div>

            {/* <a href="https://github.com/gaughanln" target = "_blank" >
            <img src={github} width="50" height="50" className ="icon" alt="github icon" /></a>
            
            <a href="https://www.linkedin.com/in/gaughanln/" target = "_blank" ><img src={linkedin} width="50" height="50" className ="icon" alt="linkedin icon" /></a> */}
            {/* Background, photo, name, header, icons */}
          </div>
          <div className ="col-md-6 my-auto">
            <img src={myPhoto} className ="home-photo" alt="Lindsey Gaughan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
