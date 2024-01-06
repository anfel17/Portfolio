// Footer.js

import { Link } from "react-scroll";
import React from "react";


function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--social--icon">
          <ul  className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/fb.png" alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/insta.png" alt="Instagram" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/twitter.png" alt="Twitter" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/linkedIn.png" alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          
            <li>
              <a
                href="https://www.github.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/GitHub.png" alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
     
    
      <hr className="divider" />
     
     
    </footer>
  );
}

export default Footer;
