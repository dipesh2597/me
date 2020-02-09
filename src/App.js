import React, {Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route,} from "react-router-dom"
import Navbar from './components/navbar'
import Introduction from './content/introduction'
import About from './content/about'
import Timeline from './content/timeline'
import Projects from './content/projects'
import Contact from './content/contact'
export default class App extends Component{
    render(){
return (
<Router>
    <div id="colorlib-page">
        <div id="container-wrap">
            <Navbar></Navbar>
				<div id="colorlib-main">
                    <Introduction />
                    <About />
                    <Timeline />
                    <Projects />
                    <Contact />
          	    </div>
      	</div>
    </div>
</Router>
)
}
}