import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer>
        <h4>
          Made With ❤️  by{" "}
          <a
            style={{
              textDecoration: "underline",
              color: "white",
            }}
            href="https://www.linkedin.com/in/prasad-ghadage-283237221/"
            target="_blank"
            rel="noreferrer"
          >
            Prasad Ghadage
          </a>
        </h4>
       
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCQEoD48hHbj9rd9y6eO2hkA"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/prasad.ghadage.35/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/96Ghadage" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/prasad_ghadage_patil/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </footer>
    </div>
  );
};

export default Footer;
