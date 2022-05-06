import React from "react";
//icons
import { BsInstagram } from "react-icons/bs";
import { MdAdsClick } from "react-icons/md";
//image
import model from "../images/models/model5-min.png";
//framer-motion
import { motion } from "framer-motion/dist/framer-motion";
//animations
import { ScrollAnimationContact } from "../animations/ScrollAnimation.js";
import {
  ContactContainerAnimation,
  ContactHeaderAnimation,
  ContactTextAnimation,
  ContactImageAnimation,
  ContactSvgAnimation,
} from "../animations/ContactAnimation.js";

const Contact = () => {
  //on scroll animations deconstruct
  const [element2, controls2] = ScrollAnimationContact();
  return (
    <motion.section
      className="contact"
      ref={element2}
      variants={ContactContainerAnimation}
      animate={controls2}
      initial="initial"
      exit="exit"
    >
      <motion.h1 variants={ContactHeaderAnimation}>KEEP IN TOUCH</motion.h1>
      <motion.div className="contact-social" variants={ContactTextAnimation}>
        <div className="contact-social_text">
          <h3>FOR OUR 2022 COLLECTION COMING</h3>
          <h2>AND SPECIAL DISCOUNT OFFERS</h2>
        </div>
        <a href="https://instagram.com">
          <BsInstagram className="instagram" />
        </a>
      </motion.div>
      <motion.div className="contact-email" variants={ContactTextAnimation}>
        <span className="contact-email_text">
          <h3>FOR WHATEVER YOU WANT</h3>
          <h3>OUR CUSTOMER SERVICE </h3>
        </span>
        <div className="contact-email_info">
          <h2>is here</h2>
          <a href="mailto: anardevelop@gmail.com">
            <MdAdsClick className="mail" />
          </a>
        </div>
      </motion.div>
      <motion.img
        src={model}
        className="image-model"
        alt="model img"
        variants={ContactImageAnimation}
      />
      <motion.div
        className="circle"
        variants={ContactSvgAnimation}
      ></motion.div>
      <div className="circle-green"></div>
    </motion.section>
  );
};

export default Contact;
