import React from 'react'

const Contactcontent = () => {
    return (
        <div id="Contactcontent-id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="padding-left">
                            <h1>Phone</h1>
                            <h2>0905 8969 409</h2>
                            <h1>Email</h1>
                            <h2>kanimnorhan7@gmail.com</h2>
                            <h1>Address</h1>
                            <h2>Purok Lovers, Brgy. Ambalgan, Sto. Nino, South Cotabato</h2>
                            <h1>Follow Me</h1>
                            <i className="fab fa-facebook-square"></i>
                            <i className="left-distance fab fa-linkedin"></i>
                            <i className="left-distance fab fa-twitter-square"></i>
                            <i className="left-distance fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <h3>I need Feedback <span>. . .</span></h3> */}
                        <h3>Leave me a Message <span>. . .</span></h3>
                        <h1>Name</h1>
                        <input type="text" />
                        <h1>Email</h1>
                        <input type="text" />
                        <h1>Message</h1>
                        <textarea name="" id="" cols="30" rows="2"></textarea>
                        <button className="btn btn-submit">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactcontent
