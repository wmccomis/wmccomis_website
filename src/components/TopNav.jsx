import React from 'react'
import '../assets/stylesheets/topnav.scss'
import {Link, animateScroll} from "react-scroll"
import $ from 'jquery';

const TopNav = () => {
  return (
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <Link className="navbar-brand" smooth={true} to="home" duration={500}>Will McComis</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Link className="nav-link" activeClass="nav-link active" smooth={true} to="home" duration={500}>Home</Link>
      <Link className="nav-link" activeClass="nav-link active" smooth={true} to="aboutme" duration={500}>About</Link>
      <Link className="nav-link" activeClass="nav-link active" smooth={true} to="projects" duration={500}>Projects</Link>
      <Link className="nav-link" activeClass="nav-link active" smooth={true} to="flying" duration={500}>Flying</Link>
      <Link className="nav-link" activeClass="nav-link active" smooth={true} to="resume" duration={500}>Resume</Link>
    </div>
  </nav>
  )
}

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });
   

export default TopNav

