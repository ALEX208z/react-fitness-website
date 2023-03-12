import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import "./About.css";
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, porro. Ullam voluptas culpa vitae exercitationem molestiae vel ipsum nostrum optio.
      </Header>
      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about-section-content">
              <h1>Our Story</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium impedit, officia ratione in tenetur maxime illum, corrupti, quam placeat iste commodi repudiandae voluptate quas minima. Ad fugiat labore a.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et pariatur a veniam veritatis ex numquam, eligendi aliquam at itaque.
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, illum?</p>
          </div>
        </div>
      </section>


      <section className="about-vision">
        <div className="container about-vision-container"> 
          <div className="about-section-content">
              <h1>Our Vision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium impedit, officia ratione in tenetur maxime illum, corrupti, quam placeat iste commodi repudiandae voluptate quas minima. Ad fugiat labore a.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et pariatur a veniam veritatis ex numquam, eligendi aliquam at itaque.
              </p>
              
          </div>
          <div className="about-section-image">
            <img src={VisionImage} alt="OurvisionImage" />
          </div>
        </div>
      </section>


      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-section-image">
            <img src={MissionImage} alt="OurMissionImage" />
          </div>
          <div className="about-section-content">
              <h1>Our Mission</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit laudantium impedit, officia ratione in tenetur maxime illum, corrupti, quam placeat iste commodi repudiandae voluptate quas minima. Ad fugiat labore a.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae et pariatur a veniam veritatis ex numquam, eligendi aliquam at itaque.
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, illum?</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
