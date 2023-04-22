import React from 'react';
import playlist from './assets/searchScreenshot.png'

function Projects() {
  return (
    <>
    <div class = "container justify-content-evenly text-center">

   {/* // card 1} */}
    <div class="card col box">
      <h1 class="card-body title">Playlist Mania</h1>
      <p class = "project-info"> For this project we </p>
      <img
        class="card-img-top"
        src= {playlist}
        alt="Playlist Mania Screenshot"
      />
      <a href="/#" class="project-links">
        Website  
      </a>
      <a href="/#" class="project-links">
        Github
      </a>
    </div>

    {/* // card 2 */}
     <div class="card box">
     <div class="card-body col">This is some text within a card body.</div>
     <img
       class="card-img-top"
       src= {playlist}
       alt="Playlist Mania Screenshot"
     />
     <a href="/#" class="project-links">
       Website | 
     </a>
     <a href="/#" class="project-links">
       Github
     </a>
   </div>

  {/* // card 3 */}
  <div class="card box">
     <div class="card-body col">This is some text within a card body.</div>
     <img
       class="card-img-top"
       src= {playlist}
       alt="Playlist Mania Screenshot"
     />
     <a href="/#" class="project-links">
       Website | 
     </a>
     <a href="/#" class="project-links">
       Github
     </a>
   </div>


   </div>

<div class = "container justify-content-evenly text-center">

{/* // card 1} */}
 <div class="card col box">
   <div class="card-body">This is some text within a card body.</div>
   <img
     class="card-img-top"
     src= {playlist}
     alt="Playlist Mania Screenshot"
   />
   <a href="/#" class="project-links">
     Website | 
   </a>
   <a href="/#" class="project-links">
     Github
   </a>
 </div>

 {/* // card 2 */}
  <div class="card box">
  <div class="card-body col">This is some text within a card body.</div>
  <img
    class="card-img-top"
    src= {playlist}
    alt="Playlist Mania Screenshot"
  />
  <a href="/#" class="project-links">
    Website | 
  </a>
  <a href="/#" class="project-links">
    Github
  </a>
</div>

{/* // card 3 */}
<div class="card box">
  <div class="card-body col">This is some text within a card body.</div>
  <img
    class="card-img-top"
    src= {playlist}
    alt="Playlist Mania Screenshot"
  />
  <a href="/#" class="project-links">
    Website | 
  </a>
  <a href="/#" class="project-links">
    Github
  </a>
</div>


</div>

</ >
  );
}

export default Projects;
