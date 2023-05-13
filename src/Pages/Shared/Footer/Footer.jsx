import React from 'react';
import logo from "../../../assets/coffee-cup.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={logo} className="h-20" alt="" />
        <p>
          <span className="font-semibold">Coffee Culture Ltd.</span>
          <br />
          Experience the Rich Flavor of Coffee Culture
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Brew2Go</a>
        <a className="link link-hover">BeanElite</a>
        <a className="link link-hover">CuppaCater</a>
        <a className="link link-hover">RoastLab</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Price list</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;