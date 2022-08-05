import React from "react";
import "./about.css";
import image from "../../assets/image.png";
import Nav from "../../Components/About-Nav/Nav";
import Heading from "../../Components/Heading/Heading";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <Heading preHeading='my intro' heading='about me'/>
        <div className="about-wrapper">
        <div className="side">
          <div className="bottom-layer">
            <img src={image} alt="" />
            <div className="my-content">
              <div class="content-container">
                <p>
                  Skilled software development professional bringing almost 4
                  years in web application developemnt, software development and
                  integration. Passionate to learn new technology and always
                  trying to give my best for my clients assignments. My motive
                  is to make my client to happy with my work.
                </p>
                
              </div>
            </div>
          </div>
          <div className="responsive-content">
            <p>
              Skilled software development professional bringing almost 4 years
              in web application developemnt, software development and
              integration. Passionate to learn new technology and always trying
              to give my best for my clients assignments. My motive is to make
              my client to happy with my work.
            </p>
          </div>
        </div>
       
        </div>
        <Nav/>
      </div>
    </div>
  );
};

export default About;
