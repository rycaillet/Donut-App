import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-words-container">
      <h1 className="home-title">Welcome to Donut Diver!</h1>
      <img
        className="home-image"
        src="https://i.imgur.com/0RcLeBE.jpeg"
        alt="donut-logo"
      />
      <p className="home-description">
        Discover the best donut shops near you and explore a wide variety of delicious donuts.
      </p>
      </div>
    </div>
  );
}

export default Home;
