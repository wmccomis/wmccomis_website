import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import '../assets/stylesheets/resume.scss'


const Resume = () => {


  return (
    <section id="resume">
        <div className="resume-container">
             {/* <iframe id="resume-display" src="https://docs.google.com/document/d/e/2PACX-1vRpBbbVQJ-GjAlqOeP4SdNUvGtFrL9GHTMr6nJRAESzF5wbckGH94pJbD78p4-PnJtx0bTIvYldPW57/pub?embedded=true"></iframe>
             <h1>Resume</h1>
             <div className="education-container">
                 <div className="row education">
                     <h1><span>Education</span></h1>
                 </div>
                 <div className="main-col">
                     <div><h3>University of Notre Dame</h3>
                     <p className="info">Bachelors of Science in Engineering<span>&bull;</span><em className="date">August 2019 - May 2023</em></p>
                     <p>&bull; Major in Computer Science </p>
                     <p>&bull; GPA: 3.967/4.00 </p>
                     <p>&bull; Honors: Trusty Merit Scholarship</p>
                     </div>
                 </div>
             </div>
                    <p>I am still working on finishing the Resume page layout</p>
                     <p>For more information, you can download my resume or view my Linkedin</p>
                     <a href="https://docs.google.com/document/d/1iJZgXSP8s1uz6pHucjUMD-Xey6vLm4nWyNwfzU-ILjw/export?format=pdf" className="btn btn-dark downloadButton" target="_blank"><i className="fa fa-download"></i> Download Resume</a>
                     <a href="https://www.linkedin.com/in/william-mccomis-346301181/" className="btn btn-primary linkedinButton" target="_blank">Linked<i className="fa fa-linkedin"></i></a> */}
            
        
        <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Will McComis</h4>
              <p><em>Computer Science student at the University of Notre Dame with a passion for developing cool programs that make people's lives better</em></p>
              <ul>
                <li>(219) 798-2886</li>
                <li>wmccomis@nd.edu</li>
                <li>williammccomis@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Science in Engineering &bull; Computer Science</h4>
              <h5>August 2019 - May 2023</h5>
              <p><em>University of Notre Dame, Notre Dame, IN</em></p>
              <ul>
                <li>GPA: 3.967/4.00</li>
                <li>Trustey Family Merit Scholar</li>
              </ul>            
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Recent Professional Experience</h3>
            <div className="resume-item">
              <h4>Avionics Systems Engineering Intern</h4>
              <h5>June 2021 - Present</h5>
              <p><em>Collins Aerospace, Cedar Rapids, IA </em></p>
              <ul>
                <li>Developing next generation Flight Control Panel</li>
                <li>Conducting market research and a rigorous design process to develop a clean-sheet touchscreen panel </li>
                <li>Using C++ and Python to develop the software interface to drive the touchscreen</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Winter Full Stack Intern</h4>
              <h5>November 2020 - January 2021</h5>
              <p><em>Platform Venture Studio, San Francisco, CA</em></p>
              <ul>
                <li>Front-end development using JavaScript, React, and CSS to create qmeet.io</li>
                <li>Back-end development with Ruby on Rails</li>
              </ul>
            </div>
            <h3 className="resume-title">Recent Life Experience</h3>
            <div className="resume-item">
              <h4>Instrument Rated Pilot</h4>
              <h5>August 2020 - Present</h5>
              <p><em>Griffith, IN </em></p>
              <ul>
                <li>Successfully passed FAA private pilot and instrument rating examinations</li>
                <li>200 total hours of flying experience </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Service to Cuba</h4>
              <h5>July 2018, July 2019</h5>
              <p><em>Havana, Cuba</em></p>
              <ul>
                <li>Built a website, fundraised, made travel arrangements, and prepared lessons for the students attending the trip</li>
                <li>Explored the culture, distributed donated items, visited with the elderly of Havana, and helped repaint homes</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className="container download">
            {/* <p>I am still working on finishing the Resume page layout</p>
            <p>For more information, you can download my resume or view my Linkedin</p> */}
            <a href="https://docs.google.com/document/d/1iJZgXSP8s1uz6pHucjUMD-Xey6vLm4nWyNwfzU-ILjw/export?format=pdf" className="btn btn-dark downloadButton" target="_blank"><FontAwesomeIcon icon={faDownload} /> Download Resume</a>
            <a href="https://www.linkedin.com/in/william-mccomis-346301181/" className="btn btn-primary linkedinButton" target="_blank">Linked<FontAwesomeIcon icon={faLinkedin} /></a>
        </div>  
      </div>
    </section>
  )
}

export default Resume
