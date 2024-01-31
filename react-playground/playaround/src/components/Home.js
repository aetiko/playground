// src/components/Home.js
import React from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import BannerImage from "../images/3.jpg";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="welcome-banner">
        <div className="head-image">
          <img src={BannerImage} className="banner-image" />
        </div>
        <div className="text-on-image">
          <h1 className="header-one">Welcome to AMAIA</h1>
          <p>We have the right expertise to find a solution</p>
        </div>
      </div>
    </>
  );
};

export default Home;
