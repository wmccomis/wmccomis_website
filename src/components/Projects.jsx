import React from "react"
import '../assets/stylesheets/projects.scss'



const Projects = () => {

  return (
      <section id="projects">
        <div className="container-fluid projects">
            <div className="container-fluid projects">
                <div className="github_header">
                <img id="github_mark" src="https://i.imgur.com/lwIF3QT.png"/>
                <img id="youtube_logo" src="https://i.imgur.com/CRROi93.png"/>
                </div>
                <div className="grid">
                  <figure className="github-project">
                      <img src="https://i.imgur.com/X22u23s.jpg"/>
                      <figcaption>
                        <h2>Lead <span>Tracking</span></h2>
                        <p>Developed a dynamic Google Map that helps the University of Notre Dame and city of South Bend keep track of lead testing in St. Joseph County</p>
                        <p>Python, JavaScript, HTML</p>
                        <a href="https://github.com/wmccomis/South_Bend_Lead_Data_Tracking_Public" target="blank"></a>
                      </figcaption>     
                  </figure>
                  <figure className="github-project">
                      <img src="https://i.imgur.com/YhpLCWF.jpg"/>
                      <figcaption>
                        <h2>Personal <span>Website</span></h2>
                        <p>Developed this website to share my life skills and adventures</p>
                        <p>React.js, CSS, HTML, Ruby on Rails</p>
                        <a href="https://github.com/wmccomis/personal_site" target="blank"></a>
                      </figcaption>     
                  </figure>
                  <figure className="github-project">
                      <img src="https://i.imgur.com/8RMvFch.jpg"/>
                      <figcaption>
                        <h2>Google <span>Preternship</span></h2>
                        <p>This project for my Data Structures course in partnership with Marty Rose at Google increaed my understanding of algorithms that are able to balance the load between multiple machines.</p>
                        <p>Python, Linux</p>
                        <a href="https://github.com/wmccomis/marty-rose-preternship-2021" target="blank"></a>
                      </figcaption>     
                  </figure>
                  <figure className="github-project">
                      <img src="https://i.imgur.com/RTsNyTs.jpg"/>
                      <figcaption>
                        <h2>Systems <span>Programming</span></h2>
                        <p>This course taught by Professor Bui dove into the world of the Unix system through the use of Shell, Python, and C</p>
                        <p>Unix, Shell, C, Python, Make</p>
                        <a href="https://github.com/wmccomis/systems_programming_sp21" target="blank"></a>
                      </figcaption>     
                  </figure>
                  <figure className="github-project">
                      <img src="https://i.imgur.com/9viA6fT.jpg"/>
                      <figcaption>
                        <h2>Collins <span>Aerospace</span></h2>
                        <p>Developed and Prototyped touchscreen Flight Control Panels. Also contributed to side projects related to ForeFlight integration and flight simulation</p>
                        <p>Adobe XD, Javascript, HTML, CSS, React, C, Python, Xcode/Swift</p>
                        <a href="https://www.collinsaerospace.com/" target="blank"></a>
                      </figcaption>     
                  </figure>
                  <figure className="github-project">
                      <img src="https://i.imgur.com/5CKtlHk.jpg"/>
                      <figcaption>
                        <h2>YouTube <span>Channel</span></h2>
                        <p>YouTube Channel I use to showcase some fun events in my life and try to be creative</p>
                        <p>Adobe Premiere Pro, After Effects, Photoshop</p>
                        <a href="https://www.youtube.com/channel/UCm3_y4l2dtPfTsrlgfzN3Gw" target="blank"></a>
                      </figcaption>     
                  </figure>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Projects