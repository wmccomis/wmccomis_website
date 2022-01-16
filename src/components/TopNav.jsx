import React from 'react'
import '../assets/stylesheets/topnav.scss'
import {Link, animateScroll as scroll} from "react-scroll"

const TopNav = () => {
//   const goHome = () => history.push('/')
  return (

    <nav className="navbar-expand-lg navbar-light navbar-custom sticky-top">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link className="nav-link" activeClass="nav-link active" to="home" duration={500}>Home</Link>
      <Link className="nav-link" activeClass="nav-link active" to="aboutme" duration={500}>About</Link>
      <Link className="nav-link" activeClass="nav-link active" to="projects" duration={500}>Projects</Link>
      <Link className="nav-link" activeClass="nav-link active" to="flying" duration={500}>Flying</Link>
      {/* <a className="nav-link" href="#">Travel</a> */}
      <Link className="nav-link" activeClass="nav-link active" to="resume" duration={500}>Resume</Link>
      {/* <a className="nav-link" href="https://docs.google.com/document/d/1iJZgXSP8s1uz6pHucjUMD-Xey6vLm4nWyNwfzU-ILjw/export?format=pdf" download>Resume</a> */}
      {/* <a className="nav-link" href="#">Contact</a> */}
    </div>
</nav>
  )
}


export default TopNav