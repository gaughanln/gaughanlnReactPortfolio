import React from "react";
import contact from "../assets/inTouch.png";

function Contact() {
  return (
    <>
      <div className="container contact-container ">
        <div className="row h-100">
          <div className="col-md-6">
            {/* contact graphic */}
            <img
              src={contact}
              className="contact-pic visible-lg"
              alt=" contact graphic"
            />
          </div>

          {/* contact form */}
          <div className="col-6">
            <div className="row align-items-center d-flex justify-content-center ">
              <div className="mx-auto col-10 col-md-8 col-lg-6">
                <h3>Want to get in touch?</h3>
                <h4>Fill out the form below and let's connect!</h4>
                <br />
                <form className="form" id="contact-form">
                  {/* name */}
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Your name
                    </label>
                    <input
                      type="name"
                      className="form-control contact"
                      required
                    />
                  </div>

                  {/* email */}
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control contact"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  {/* message */}
                  <div className="mb-3">
                    <label for="message" className="form-label">
                      I'd love to hear from you!
                    </label>
                    <textarea
                      className="form-control contact"
                      rows="8"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn rounded-pill"
                    data-toggle="modal"
                    data-target="#modalCenter"
                  >
                    Submit
                  </button>
                </form>
                <br />
                <h6>
                  This form is under construction! in the meantime, you can just
                  shoot me an email at gaughanln@yahoo.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
