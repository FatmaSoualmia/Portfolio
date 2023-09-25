import { TfiLinkedin } from "react-icons/tfi";
import { TfiGithub } from "react-icons/tfi";
import { TfiStackOverflow } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
import { TfiTumblr } from "react-icons/tfi";
import { TfiDribbble } from "react-icons/tfi";
import { TfiRss } from "react-icons/tfi";

function Footer() {
  return (
    <div className=" footer-section">
      <div className="footer-socials row justify-content-center gap-2">
        <span className="footer-icons">
          <TfiLinkedin />
        </span>
        <span className="footer-icons">
          <TfiGithub />
        </span>
        <span className="footer-icons">
          <TfiStackOverflow />
        </span>
        <span className="footer-icons">
          <TfiTwitter />
        </span>
        <span className="footer-icons">
          <TfiFacebook />
        </span>
        <span className="footer-icons">
          <TfiInstagram />
        </span>
        <span className="footer-icons">
          <TfiTumblr />
        </span>
        <span className="footer-icons">
          <TfiDribbble />
        </span>
        <span className="footer-icons">
          <TfiRss />
        </span>
      </div>
      <div className="row copyright">
        <p>
          Copyright @ <a href="http://theme-village.com/">theme_village</a> |
          Sum CV | All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
