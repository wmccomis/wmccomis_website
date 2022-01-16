import React from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro"
import Projects from "./Projects"
import Flying from "./Flying"
import AboutMe from "./AboutMe"
import Resume from "./Resume"

export default () => (
  <div id='home_container'>
    <Intro />
    <AboutMe/>
    <Projects/>
    <Flying/>
    <Resume/>
  </div>
);