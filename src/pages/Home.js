import React from "react";
//react-router redirect
import { useHistory } from "react-router-dom";
//images
import click from "../images/icons/click-icon.svg";
import model1 from "../images/models/model1-min.jpg";
import model2 from "../images/models/model2-min.jpg";
import model4 from "../images/models/model4-min.jpg";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//animations
import {
  MainModelAnimation,
  AnotherModelsAnimation,
  TextAnimation,
  TextAnimation2,
  TextAnimation3,
  WrapperAnimation,
  WrapperAnimation2,
  HomeAnimation,
  IconAnimation,
} from "../animations/HomeAnimation";

const Home = () => {
  const history = useHistory();

  return (
    <section className="home">
      <motion.div className="home-wrapper" variants={WrapperAnimation} exit="exit"></motion.div>
      <motion.div className="home-wrapper_2" variants={WrapperAnimation2} exit="exit"></motion.div>
      <motion.div className="home-container" variants={HomeAnimation} exit="exit">
        <motion.div className="home-logo" variants={TextAnimation2} initial="initial" animate="animate">
          <h2>SEECE</h2>
        </motion.div>
        <div className="home-content">
          <div className="home-content_images">
            <motion.img
              className="left-model"
              src={model2}
              alt="model-img"
              loading="lazy"
              variants={AnotherModelsAnimation}
              initial="initial"
              animate="animate"
            />
            <motion.img
              className="center-model"
              src={model1}
              alt="model-img"
              loading="lazy"
              variants={MainModelAnimation}
              initial="initial"
              animate="animate"
            />
            <motion.img
              className="right-model"
              src={model4}
              alt="model-img"
              loading="lazy"
              variants={AnotherModelsAnimation}
              initial="initial"
              animate="animate"
            />
          </div>
          <motion.h1 className="home-header" variants={TextAnimation} initial="initial" animate="animate">
            Seece
          </motion.h1>
          <motion.h2 className="home-subheader" variants={TextAnimation3} initial="initial" animate="animate">
            ‘‘eyes on lead’’
          </motion.h2>
        </div>
        <motion.div className="home-button" variants={TextAnimation2} initial="initial" animate="animate">
          <h2>EXPLORE</h2>
          <div className="home-button_container" onClick={() => { history.push("/shop"); }}>
            <span className="home-button_outer"></span>
            <motion.img
              src={click}
              alt="click-icon"
              variants={IconAnimation}
              initial="initial"
              animate="animate"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
