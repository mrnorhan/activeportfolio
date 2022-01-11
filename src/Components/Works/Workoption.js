import React, {Component} from 'react';


import Project from '../../Assets/Images/dummy-project.jpg';
import Thumbnail from '../../Assets/Images/thumbnail-project.jpg';

class Workoption extends Component{

    constructor (props) {
        super (props);
        this.state = {
            Data: [
                {
                    id: 1,
                    thumbnail: Project,                    
                    title: 'PROJECT',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons2: 'left-distance fab fa-react',
                    icons3: 'left-distance fab fa-github',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                },
                {
                    id: 2,
                    thumbnail: Project,                    
                    title: 'TITLE',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons2: 'left-distance fab fa-react',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                },
                {
                    id: 3,
                    thumbnail: Project,                    
                    title: 'NAME',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons3: 'left-distance fab fa-github',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                },
                {
                    id: 4,
                    thumbnail: Project,                    
                    title: 'HERE',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                    btn:'button className="btn-view-website">VIEW WEBSITE</button',

                }
            ]
        }
    }
    

    clickMe(item){
        this.setState({
            id: item.id,
            thumbnail: item.thumbnail,
            title: item.title,
            year: item.year,
            icons1: item.icons1,
            icons2: item.icons2,
            icons3: item.icons3,
            website: item.website,
            mockup: item.mockup,
            btn: item.btn,
        });
    }
    
    render(){
        return(
            <div id="Workoption-id">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={Thumbnail} alt="" />
                            </div>

                            <div className="col-lg-6">
                                <div>
                                    <h1>{this.state.title} <span>{this.state.year}</span></h1>
                                    <i class={this.state.icons1}></i>
                                    <i class={this.state.icons2}></i>
                                    <i class={this.state.icons3}></i>
                                    <div>
                                        <a href={this.state.website} target="_blank">
                                            <button className="btn-view-website">VIEW WEBSITE</button>
                                        </a>
                                        <a href={this.state.mockup} target="_blank">
                                            <button className="btn-view-mockup">VIEW MOCKUP</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wrapper">
                                <div className="item">
                                    <div
                                        className="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                    >
                                        {
                                            this.state.Data.map((item, index) => (
                                                <img
                                                    className={"image-gap"}
                                                    onClick={this.clickMe.bind(this,item)}
                                                    src={item.thumbnail} alt="" srcset=""
                                                />
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Workoption