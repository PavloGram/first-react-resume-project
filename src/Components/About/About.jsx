import React from 'react'
import aboutImg from "../../images/about.jpg";
import playIcon from "../../images/play-icon.png";

function About({setPlay}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImg} alt="" className="about-img" />
        <img src={playIcon} alt="" className="about-icon" onClick={() => setPlay(true)} />
      </div>
      <div className="about-right">
        <h2 className='about-title'>About university</h2>
        <h3 className='about-subtitle'>Nurturrin tomorrow’s leaders today </h3>
        <p className='about-text'>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p className='about-text'>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p className='about-text'>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  )
}

export default About