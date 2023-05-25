import React from "react";
import contact from "../assets/inTouch.png";

function Contact() {
  return (
    <>
      <div className="container contact-container ">
        <div className="row align-items-center">
          <div className="col-md-6">
            {/* contact graphic */}
            <img
              src={contact}
              className="contact-pic visible-lg"
              alt=" contact graphic"
            />
          </div>

          {/* contact form */}
          <div className="col-md-6  text-center">
            {/* <div className="row align-items-center d-flex justify-content-center "> */}
             
              <h2>
                  Let's connect! 
                </h2>
                <p>Shoot me an email and I'll get back to you. </p>
    

                  <a href ="mailto: gaughanln@yahoo.com" className="btn rounded-pill email">
                  👋🏼 Email me!                    
                  </a>
              
                <br />
                
                
  
            </div>
     
        </div>
      </div>
    </>
  );
}

export default Contact;
