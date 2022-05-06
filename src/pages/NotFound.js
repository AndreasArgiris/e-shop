import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaHome } from "react-icons/fa";
//this is a 404 errow page

const NotFound = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page doesn't exist</h2>
      <span>
        <h3>Redirect to</h3>
        <Link to={"/"}>
          <FaHome className="back-to" />
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
