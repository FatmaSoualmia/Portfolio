import { TfiLocationPin } from "react-icons/tfi";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function HomeContact() {
  return (
    <div className="home-contact-section">
      <div className="row all-contact">
        <div className="col-md-3 col-6 p-4 ">
          <TfiLocationPin className="custom-contact" color="white" size={30} />
          <div className="custom-contact">LOCATION</div>
          <p>Monastir, TUNISIA</p>
        </div>
        <div className="col-md-3 col-6 p-4">
          <TfiCommentsSmiley
            className="custom-contact"
            color="white"
            size={30}
          />
          <div className="custom-contact">EMAIL</div>
          <p>fatma.soualmia@enetcom-u.sfax.tn</p>
        </div>
        <div className=" col-md-3 col-6 p-4">
          <TfiWorld className="custom-contact" color="white" size={30} />
          <div className="custom-contact">WEB</div>
          <p>www.johndoe.com</p>
        </div>
        <div className=" col-md-3 col-6 p-4">
          <TfiHeadphoneAlt className="custom-contact" color="white" size={30} />
          <div className="custom-contact">PHONE</div>
          <p>46 685 904</p>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
