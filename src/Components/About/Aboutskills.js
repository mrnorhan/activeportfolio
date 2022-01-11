import React from 'react';
import AdobePhotoshop from '../../Assets/Images/skills-adobe.png';
import Sass from '../../Assets/Images/skills-sass.png';
import Php from '../../Assets/Images/skills-php.png';
import Mysql from '../../Assets/Images/skills-mysql.png';
import Vscode from '../../Assets/Images/skills-vscode.png';
import Aftereffects from '../../Assets/Images/skills-aftereffects.png';
import Html from '../../Assets/Images/skills-html.png';
import Figma from '../../Assets/Images/skills-figma.png';
import Github from '../../Assets/Images/skills-github.png';
import Reactjs from '../../Assets/Images/skills-react.png';

const Aboutskills = () => {
    return (
        <div id="skills-id">
            <div className="container-fluid">
                
                <div className="row">
                    {/* <h1>SKILLS</h1> */}
                    <div className="col-lg-1"></div>
                    <div className="col-lg-1">
                        <i class="fab fa-figma">
                            <span>FIGMA</span>
                            {/* <span>FIGMA <br/> 30%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab fa-html5">
                            <span>HTML5</span>
                            {/* <span>HTML5 <br/> 20%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab fa-react">
                            <span>REACT</span>
                            {/* <span>REACT <br/> 40%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab #fa-react">
                            <img src={Sass} alt="" srcset="" />
                            <span>SASS</span>
                            {/* <span>SASS <br/>70%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab #fa-react">
                            <img src={Php} alt="" srcset="" />
                            <span>PHP</span>
                            {/* <span>PHP <br/>80%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab #fa-react">
                            <img src={Mysql} alt="" srcset="" />
                            <span>MYSQL</span>
                            {/* <span>MYSQL <br/>90%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab #fa-react">
                            <img src={Vscode} alt="" srcset="" />
                            <span>VS.CODE</span>
                            {/* <span>VS.CODE <br/> 100%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab fa-github">
                            <span>GITHUB</span>
                            {/* <span>GITHUB <br/> 50%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fab #fa-figma">
                            <img src={AdobePhotoshop} alt="" srcset="" />
                            <span>Photoshop</span>
                            {/* <span>Photoshop 10%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1">
                        <i class="fas #fa-paint-brush">
                            <img src={Aftereffects} alt="" srcset="" />
                            <span>AF. EFFECTS</span>
                            {/* <span>AF. EFFECTS <br/> 60%</span> */}
                        </i>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Aboutskills
