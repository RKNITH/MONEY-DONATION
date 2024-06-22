import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Delhi, India</li>
          <li>ravi@gmail.com</li>
          <li>+91 7073002267</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareTwitter />
              </span>{" "}
              <span>Twitter (X)</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaYoutube />
              </span>{" "}
              <span>Youtube</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareInstagram />
              </span>{" "}
              <span>Instagram</span>{" "}
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaLinkedin />
              </span>{" "}
              <span>Linkedin</span>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
