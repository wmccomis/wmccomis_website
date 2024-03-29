import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import '../assets/stylesheets/resume.scss'


const Resume = () => {


  return (
    <section id="resume">
        <div className="resume-container">
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
                {/* <li>Phone</li> */}
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
                <li>GPA: 3.973/4.00</li>
                <li>Trustey Family Merit Scholar</li>
              </ul>            
            </div>
            <h3 className="resume-title">Skills</h3>
            <div className="resume-item">
            <p><em>Technologies</em></p>
              <ul>
                <li>Github, Heroku, Android Studio, Xcode, AWS API, AWS CLI, SOLIDWORKS, MATLAB, Final Cut Pro, Adobe Premiere Pro, XD</li>
              </ul>  
              <p><em>Languages/Libraries</em></p>
              <ul>
                <li>C, Python, PostgreSQL, C++, JavaScript, React.js, MongoDB, Java, Kotlin, TensorFlow, PyTorch, Swift, Flutter, Dart, Ruby, Django</li>
              </ul>           
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Recent Professional Experience</h3>
            <div className="resume-item">
              <h4>Android Developer</h4>
              <h5>July 2021 - Present</h5>
              <p><em>NDX Insights, Tampa Bay, FL</em></p>
              <ul>
                <li>Android development that made substantial contributionsto the company's aviation safety technologies. </li>
                <li>Developed an API for the company's services that provides crucial data about aircraft dimensions and specifications </li>
                <li>Kotlin, Java, Python, Parse, Flask, Digital Ocean</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Avionics Systems Engineering Intern</h4>
              <h5>June 2021 - November 2021</h5>
              <p><em>Collins Aerospace, Cedar Rapids, IA </em></p>
              <ul>
                <li>Developing next generation Flight Control Panel</li>
                <li>Conducting market research and a rigorous design process to develop a clean-sheet touchscreen panel </li>
                <li>Using C++ and Python to develop the software interface to drive the touchscreen</li>
              </ul>
            </div>
            <h3 className="resume-title">Recent Life Experience</h3>
            <div className="resume-item">
              <h4>Instrument Rated Pilot</h4>
              <h5>August 2020 - Present</h5>
              <p><em>Griffith, IN </em></p>
              <ul>
                <li>Successfully passed FAA private pilot and instrument rating examinations</li>
                <li>230+ total hours of flying experience </li>
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
