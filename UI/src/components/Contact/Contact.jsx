import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import "./contact.css";
const Contact = () => {

  return (
    <div className="contact">
      <h2>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</h2>
      <div className="contactWrapper">
        <div className="left">
          <img src="/contact.jpg" alt="contact" />
        </div>
        <div className="right">
          <p>Feel free to contact us.</p>
          <div className="rightInner">
            <div className="iconText">
              <MdEmail fontSize={20} />
              <span>tomatoharvest@gmail.com</span>
            </div>
            <div className="iconText">
              <MdLocalPhone fontSize={20} />
              <span>+977-9841234567</span>
            </div>

            <div className="socialIcons">
              <FaFacebook fontSize={20} />
              <IoLogoWhatsapp fontSize={20} />
              <FaFacebookMessenger fontSize={20} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
