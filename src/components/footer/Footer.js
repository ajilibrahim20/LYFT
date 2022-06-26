import "./Footer.css";
import React from "react";
import logo from "../../images/lyft.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div>
        <img src={logo} className="footer-logo"></img>
      </div>
      <div className="copyright">copyright 2022; All Right Reserved By LYFT</div>
    </footer>
  );
}