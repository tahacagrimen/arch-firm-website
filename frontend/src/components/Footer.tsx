import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className="footer_container">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="logo"
      >
        <img
          src="https://github.com/tahacagrimen/strapi-learning/blob/master/frontend/src/media/logo.png?raw=true"
          alt="arkayın logo"
        />
      </div>
      <div className="menu">
        <button>Projeler</button>
        <button>Hakkımızda</button>
        <button>İletişim</button>
      </div>
      <div className="portfolio-btn">
        <h3>Projelerimiz</h3>
        <HiArrowRight />
      </div>
    </div>
  );
};

export default Footer;
