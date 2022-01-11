import React from 'react'
import Typewriter from "typewriter-effect";


const Hometext = () => {
    

    return (
        <div id="Hometext-id">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div>
                            <div className="left-line">
                                <div className="left-line-bg"></div>
                                <div className="left-line-border"></div>
                                <h1 className="padding-top">Discover my Amazing</h1>
                                <h1>Art Space!</h1> 
                            </div>
                            <div className="sub-content">
                                <h2>Better Design, Beter Experiences</h2>
                                <h3>
                                    &lt;<strong>code</strong>&gt;
                                    <h4>I build</h4>
                                    <h4> 
                                        <Typewriter 
                                            options={{
                                                strings: [
                                                        " design mocups",
                                                        " Web Interfaces",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h4>
                                    &lt;<strong>/code</strong>&gt;
                                </h3>
                                <a href="#Workstitle-id">
                                    <button className="btn">DISCOVER NOW</button>
                                </a>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hometext
