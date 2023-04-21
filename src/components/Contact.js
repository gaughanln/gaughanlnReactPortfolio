import React from 'react';



function Contact() {
return (
<form>

  {/* Email, github, fields for someone to contact including name, email and message */}

  <div className="form-group">
  <label for="name">Name</label>
    <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="your name" />
    
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>

</form>

)
}

export default Contact