import cv from "../assets/cv.jpg";
import CVFatmaSoualmia from "../assets/CVFatmaSoualmia.pdf";

import { TfiPinterestAlt } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiGoogle } from "react-icons/tfi";

function About() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-sm-5">
            <img className="about-picture" src={cv} alt="John Doe" />
          </div>
          <div className="col-lg-7 col-sm-7">
            <span className="about-greeting">Hello,</span>
            <h3 className="about-title">I'M FATMA SOUALMIA</h3>
            <span className="about-info">
              A First Year Telecommunication Engineering Student.
            </span>
            <p className="about-paragraph">
              Je suis une étudiante en 1ére année de télécommunication à
              l'ENETCOM. Avec de solides compétences en résolution de problèmes
              et une volonté d'assumer un rôle de leader, je suis constamment
              motivé à relever de nouveaux défis et à améliorer les résultats.
              J'ai de bonnes compétences de communication. J'aime inspirer des
              nouvelles idées et j'essaie les appliquer,tout en étant attentive
              aux moindres détails. Mon objectif est d'améliorer mes compétences
              et d'acquérir une expérience professionnelle riche.
            </p>
            <div className="progress-part">
              <div className="progress-title">HTML5</div>
              <div className="progress1"></div>
            </div>
            <div className="progress-part">
              <div className="progress-title">Bootstrap</div>
              <div className="progress2"></div>
            </div>
            <div className="progress-part">
              <div className="progress-title">React</div>
              <div className="progress3"></div>
            </div>
            <div className="progress-part">
              <div className="progress-title">WordPress</div>
              <div className="progress4"></div>
            </div>
            <div className="row about-socials">
              <div className="col-lg-6 socials">
                <a className="text-decoration-none" href="https://www.facebook.com/profile.php?id=100069223098958">
                <span className="facebook">
                  <TfiFacebook color="white" />
                </span>
                </a>
                <a className="text-decoration-none" href="">
                <span className="twitter">
                  <TfiTwitterAlt color="white" />
                </span>
                </a>
                <a className="text-decoration-none" href="">
                <span className="google">
                  <TfiGoogle color="white" />
                </span>
                </a>
                <a className="text-decoration-none" href="https://www.linkedin.com/in/fatma-soualmia-52a440148/?originalSubdomain=tn">
                <span className="linkedin">
                  <TfiLinkedin color="white" />
                </span>
                </a>
                <a className="text-decoration-none" href="https://www.pinterest.com/fatmasoualmia/">
                <span className="pinterest">
                  <TfiPinterestAlt color="white" />
                </span>
                </a>
              </div>
              <div className="col-lg-6">
                <a
                  className="text-decoration-none"
                  href={CVFatmaSoualmia}
                  download={CVFatmaSoualmia}
                  target="_blank"
                >
                  <button className=" about-button">Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
