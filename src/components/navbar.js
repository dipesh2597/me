import React, { Component } from 'react'
import profilepic from '../img/profile.png'
import hackerrank from '../img/hackerrank.png'
import hackerearth from '../img/hackerearth.png'

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>

                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                        <div className="author-img" style={{backgroundImage: 'url(images/profile.png)'}} />
                        <h1><a href="index.html">Dipesh Sharma</a></h1>
                        
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                          <div id="navbar" className="collapse">
                          <ul>
                          <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                          <li className="active"><a href="#about" data-nav-section="about">About</a></li>
                          <li className="active"><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                          <li className="active"><a href="#projects" data-nav-section="projects">Projects</a></li>
                          <li className="active"><a href="#contact" data-nav-section="contact">Contact</a></li>
                          </ul>
                          </div>
                        </nav>
                        <nav className="social">
                        <h2 className="colorlib-heading animate-box">Social</h2>
                          <ul>
                          <a href="https://www.facebook.com/dipesh2507" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"/></a><br />
                            <a href="https://www.instagram.com/midnight._._._.rambler/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"/></a><br />
                            <a href="https://www.linkedin.com/in/dipesh-sharma-2507/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"/></a><br />
                            <a href="https://github.com/dipesh2597" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a><br />
                            <a href="https://www.hackerearth.com/@dipesh2597" target="_blank" rel="noopener noreferrer"><img src={hackerearth} style={{width : "20px"}}></img></a><br />
                            <a href="https://www.hackerrank.com/dipesh2597" target="_blank" rel="noopener noreferrer"><img src = {hackerrank} style={{width : "20px"}}></img></a>
                          </ul>
                        </nav>
                        <div className="colorlib-footer">
                          <p><small>
                              Made with <i className="icon-heart" aria-hidden="true" /> and <i   className="icon-beer" aria-hidden="true"></i>
                          </small></p>
                        </div>
                        </div>
                    </aside>
                </div>
            </div>
            )
        }
    }
    export default Navbar