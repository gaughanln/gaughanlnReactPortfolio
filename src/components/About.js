import React from 'react';
import aboutPhoto from "./assets/gaughanln.png";



function About() {
return (
<div class="container ">
        <div class="row h-100">
          <div class="col-md-6 my-auto text-center">
            <img src={aboutPhoto} class="about-photo" alt="Lindsey Gaughan" />
            
            {/* Background, photo, name, header, icons */}
          </div>
        
          <div class="col-md-6 my-auto box rounded-pill d-flex justify-content-evenly">
           
          <p class = "about-me quote-wrapper text-center">I am an aspiring Full Stack Web Developer/Software Engineer with a background in Marketing, Project Management and Graphic Design. I have a creative eye that translates through my previous experience directly into Web Development. Passion for learning and growing with extreme attention to detail which provides dedication to any project.
          <br></br>
          <br></br>
          Fun fact: I've recently become an obsessive plant mom</p>
        
        
          </div>
        </div>
      </div>

);
}

export default About