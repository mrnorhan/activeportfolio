import React from 'react';
import AboutImage from '../../Assets/Images/about-img.png';
import Arrowdown from '../../Assets/Images/home-arrow- down.png';

const Aboutcontent = () => {
    return (
        <div id="Aboutcontent-id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutImage} alt="" srcset="" />
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <h2>Hello</h2>
                            <h1 className="padding-top">I'm Norhan T.</h1>
                            <h1>Kanim</h1>
                            <h3 className="padding-top">Frontend Developer | UI/UX Designer |</h3>
                            <h3>Photo &amp; Video Editor</h3>
                            <i className="fab fa-facebook-square"></i>
                            <i className="left-distance fab fa-linkedin"></i>
                            <i className="left-distance fab fa-twitter-square"></i>
                            <i className="left-distance fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                {/* Arrow Down */}
                {/* <div id="arrowAnimation">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <section className="arrow-down text-right">
                                    <a href="/#skills-id" activeClassName="main-nav-active">
                                        <img src={Arrowdown} className="img-fluid" alt="Arrow Effect" />
                                    </a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Aboutcontent
