import React, {Fragment} from 'react';

function Contact(){
  return(
    <Fragment>
    <div className="container" id="contact">
      <h1>You Don't Have to Call</h1> <h5>Contact Me</h5>
      <div className="text-box">
        <div className="">
    							<div className="row">
    								<div className="animate-box fadeInRight animated" data-animate-effect="fadeInRight">
    									<form action="https://formspree.io/sean.pitterson@gmail.com" method="POST">
    										<div className="form-group">
    											<input type="text" className="form-control" placeholder="Name" name="name"/>
    										</div>
    										<div className="form-group">
    											<input type="email" className="form-control" placeholder="Email" name="email"/>
    										</div>
    										<div className="form-group">
    											<input type="text" className="form-control" placeholder="Subject" name="subject"/>
    										</div>
    										<div className="form-group">
    											<textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
    										</div>
    										<div className="form-group">
    											<input type="submit" className="btn btn-primary btn-send-message" value="Send Message"/>
    										</div>
    									</form>
    								</div>

    							</div>
    						</div>
    </div>
    </div>
    </Fragment>
  )
}

export default Contact;
