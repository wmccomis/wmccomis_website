import '../assets/stylesheets/aboutme.scss'

const AboutMe = () => {
    console.log(1)
    console.log(process.env.REACT_APP_GoogleAPIkey)
    console.log(2)

    return (
        <section id="aboutme">
              <div id="bio_container">
                  <h1>Who am I?</h1>
                  <p>Hi! My name is Will McComis. I currently am a Junior at the University of Notre Dame. I am majoring in computer science, however I have a passion for aviation and love pairing the two together. Outside of the classroom, I enjoy being a part of the running club, a member of the CS for Good club, and a founder for the Aviation Association of Notre Dame. In the summer of 2020, I earned my private pilot's license and added an instrument rating to that in January 2021. If you see a plane buzzing over campus on the weekends, that's probably me taking my friends up. Aviation has quickly become a true passion of mine. The engineering fascinates me and I can't stop wanting to learn more and become a better pilot. While I do a lot on campus, I am also part of the Pilots N Paws organization, which connects me with animals in need of transport. Oftentimes, this is for medical needs. I mainly fly dogs in the Midwest such as from Ohio to Chicago. I have found this to be an incredible way for me to use my passion and talent for flying for the good of others. Once I gain enough experience, I hope to become a member of Angel Flight, which will allow me to fly humans in need of medical care such as cancer treatment or organ transplant. In my free time, I enjoy spending time with friends and family, running, wakeboarding, snowboarding, creating fun programs that (sometimes) make my life easier, and of course, flying planes.</p>
              </div>
        </section>
    )
  }
  
  export default AboutMe