import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const { pathname } = location;

  console.log(pathname);

  const handleHangdownText = (path: string): string => {
    if (path === "/") {
      return "ANASAYFA";
    } else if (path === "/about") {
      return "HAKKIMDA";
    } else if (path === "/contact") {
      return "İLETİŞİM";
    } else if (path === "/projects") {
      return "PROJELER";
    } else if 

  };

  return (
    <div>
      <div className="tersyazi">
        <div className="tersyazi__cizgi"></div>
        <h3>{handleHangdownText(pathname)}</h3>
      </div>
    </div>
  );
};

export default Header;
