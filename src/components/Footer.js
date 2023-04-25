import React from "react";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";

function Footer() {
  return (
    <> 

   <div class="container footer-container">
   <footer class="d-flex flex-wrap justify-content-center align-items-center  border-top footer">
     <a href="https://www.linkedin.com/in/gaughanln/" target="_blank">
       <img
         src={linkedin}
         width="40"
         height="40"
         className="icon-nav"
         alt="linkedin icon"
       />
     </a>

     <a href="https://github.com/gaughanln" target="_blank">
       <img
         src={github}
         width="40"
         height="40"
         className="icon-nav "
         alt="github icon"
       />
     </a>
   </footer>
 </div>
</>
);
}

export default Footer;
