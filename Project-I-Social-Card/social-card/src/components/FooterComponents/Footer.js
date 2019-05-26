import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a href="#">
          <i class="far fa-comment" />
        </a>
        <a href="#">
          <i class="fas fa-retweet" />
        </a>

        <a href="#">
          <i class="far fa-heart" />
        </a>

        <a href="#">
          <i class="far fa-envelope" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
