import React from 'react'
import '../assets/stylesheets/application.scss'


const Intro = () => {

  return (
    <section id="home" className="d-flex align-items-center justify-content-center">
        <div className="jumbotron bg-transparent">
            <div className="container">
                <h1 className="display-4">Aviator, Runner, Traveler, Adventurer</h1>
                {/* <h1 className="display-4">THIS WEBSITE IS STILL UNDER CONSTRUCTION</h1> */}
                <p className="lead" align="center">
                This is my personal site featuring my life adventures and skills, enjoy!
                </p>
            </div>
        </div>
    </section>
  )
}

export default Intro