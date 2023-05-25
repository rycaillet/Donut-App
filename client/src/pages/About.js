import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1 className="about-title">About Page</h1>
        <h3 className="about-description">
          This app was created in 2022 to please sugar-crazed people who want to get their fill of tasty donuts, yet don't know where to look. Well... look no further because this app was designed to guide you in the right direction. Tasty donuts are only a click away, so what are you waiting for?
        </h3>
      </div>
      <div className="about-image-container">
      <img
        className="about-image"
        src="https://images.pexels.com/photos/6551416/pexels-photo-6551416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="About Image"
      />
      </div>
    </div>

  );
}

export default About;
