import React from "react";
import namepnglg from "./assets/name.png";
import myPhoto from "./assets/homePhoto.png";
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"

function Home() {
  return (
    <div>
      <div class="container ">
        <div class="row h-100">
          <div class="col-md-6 my-auto text-center">
            <img src={namepnglg} class="home-name" alt="Lindsey Gaughan" />
            <img src={github} width="50" height="50" class="icon" alt="github icon" />
            
            <img src={linkedin} width="50" height="50" class="icon" alt="linkedin icon" />
            {/* Background, photo, name, header, icons */}
          </div>
          <div class="col-md-6 my-auto">
            <img src={myPhoto} class="home-photo" alt="Lindsey Gaughan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
