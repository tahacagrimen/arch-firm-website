import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  let navigate = useNavigate();

  const { pathname } = location;

  console.log(pathname);

  const handleHangdownText = (path: string) => {
    if (path === "/") {
      return "ANASAYFA";
    } else if (path === "/about") {
      return "HAKKIMDA";
    } else if (path === "/contact") {
      return "İLETİŞİM";
    } else if (path === "/projects") {
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
        <div className="logo"></div>
        <nav>
          <button onClick={() => navigate("/projects")}>Projeler</button>
          <button onClick={() => navigate("/about")}>Hakkımızda</button>
          <button onClick={() => navigate("/contact")}>İletişim</button>
        </nav>
      </div>
      <div className="sidebar">
        <div className="sidebar__logo"></div>
        <div className="sidebar__menu">
          <button onClick={() => navigate("/projects")}>Projeler</button>
          <button onClick={() => navigate("/about")}>Hakkımızda</button>
          <button onClick={() => navigate("/contact")}>İletişim</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
