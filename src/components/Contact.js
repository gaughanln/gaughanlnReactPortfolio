import React from "react";
import contact from "./assets/inTouch.png"

{
  /* Email, github, fields for someone to contact including name, email and message */
}

// const form = document.querySelector('#contact-form');
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     form.reset();
//   });

function Contact() {
  return (
    <>
    <div className = "container contact-container ">
      <div className = "col-6">

        <img src = {contact} class = "contact-pic visible-lg" alt=" contact graphic" />
      </div>

      <div className = "col-6">
      <div class="row align-items-center ">
        <div class="mx-auto col-10 col-md-8 col-lg-6">
          <h3>Want to get in touch?</h3>
          <h4>Fill out the form below and let's connect!</h4>
          <br/>
          <form class="form" id="contact-form">

            <div class="mb-3">
              <label for="name" class="form-label">
                Your name
              </label>
              <input type="name" class="form-control contact"  />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control contact"
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">
                I'd love to hear from you!
              </label>
              <textarea
                class="form-control contact"
                rows="8"
              ></textarea>
            </div>

            <button type="submit" class="btn rounded-pill" data-toggle="modal" data-target="#modalCenter">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
      </div>





{/* <!-- Modal on submit--> */}
{/* <div class="modal fade modal-contact" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="thankYou" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="message">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Got it!</h5>
        <p>Can't wait to connect! Until then, please feel free to check out my resume!</p>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}



    </>
  );
}

export default Contact;
