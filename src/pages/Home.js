import React from "react";
//react-router redirect
import { useHistory } from "react-router-dom";
//images
import click from "../images/icons/click-icon.svg";
import model1 from "../images/models/model1-min.jpg";
import model2 from "../images/models/model2-min.jpg";
import model4 from "../images/models/model4-min.jpg";

const Home = () => {
  const history = useHistory();
  return (
    <section className="home">
      <div className="home-container">
        <div className="home-logo">
          <h2>SEECE</h2>
        </div>
        <div className="home-content">
          <div className="home-content_images">
            <img className="left-model" src={model2} alt="model-img" />
            <img className="center-model" src={model1} alt="model-img" />
            <img className="right-model" src={model4} alt="model-img" />
          </div>
          <h1 className="home-header">Seece</h1>
          <h2 className="home-subheader">‘‘eyes on lead’’</h2>
        </div>
        <div className="home-button">
          <h2>EXPLORE</h2>
          <div
            className="home-button_container"
            onClick={() => {
              history.push("/shop");
            }}
          >
            <span className="home-button_outer"></span>
            <img src={click} alt="click-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
