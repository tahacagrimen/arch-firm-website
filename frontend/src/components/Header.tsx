import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "../styles/Header.scss";

const Header = () => {
  const location = useLocation();

  const [activeButton, setActiveButton] = useState<string>("");

  const [sidebar, setSidebar] = useState<boolean>(true);

  let navigate = useNavigate();

  const { pathname } = location;

  const handleHangdownText = (path: string) => {
    if (path === "/") {
      return "ANASAYFA";
    } else if (path === "/about") {
      return "HAKKIMDA";
    } else if (path === "/contact") {
      return "İLETİŞİM";
    } else if (path === "/projects" || path.includes("/projects/")) {
      return "PROJELER";
    }
  };

  return (
    <div className="header_container">
      <div className="tersyazi">
        <div className="tersyazi__cizgi"></div>
        <h3>{handleHangdownText(pathname)}</h3>
      </div>
      <div className="navbar">
        <div
          className="logo"
          onClick={() => {
            setActiveButton("");
            navigate("/");
          }}
        >
          <img
            src="https://github.com/tahacagrimen/strapi-learning/blob/master/frontend/src/media/logo.png?raw=true"
            alt="arkayın logo"
          />
          <h1>
            Arkayın <span>Mimarlık</span>
          </h1>
        </div>
        <nav>
          <button
            className={`navbtn navbtn${
              activeButton === "projects" ? "--active" : ""
            }`}
            onClick={() => {
              setActiveButton("projects");
              navigate("/projects");
            }}
          >
            Projeler
          </button>
          <button
            className={`navbtn navbtn${
              activeButton === "about" ? "--active" : ""
            }`}
            onClick={() => {
              setActiveButton("about");
              navigate("/about");
            }}
          >
            Hakkımızda
          </button>
          <button
            className={`navbtn navbtn${
              activeButton === "contact" ? "--active" : ""
            }`}
            onClick={() => {
              setActiveButton("contact");
              navigate("/contact");
            }}
          >
            İletişim
          </button>
        </nav>
      </div>
      <div className="sidebar">
        <div
          onClick={() => setSidebar((prev) => !prev)}
          className="sidebar__logo"
        >
          {sidebar ? <HiMenu /> : <HiX />}
        </div>
        <div
          className={
            sidebar ? "sidebar_menu" : "sidebar_menu sidebar_menu--active"
          }
        >
          <button
            onClick={() => {
              setSidebar(true);
              setActiveButton("projects");
              navigate("/projects");
            }}
          >
            Projeler
          </button>
          <button
            onClick={() => {
              setSidebar(true);
              setActiveButton("about");
              navigate("/about");
            }}
          >
            Hakkımızda
          </button>
          <button
            onClick={() => {
              setSidebar(true);
              setActiveButton("contact");
              navigate("/contact");
            }}
          >
            İletişim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
