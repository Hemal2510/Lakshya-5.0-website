import "../styles/Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="footer">

  <div className="footer-embers">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
      <div className="footer-bg-text">
        LAKSHAYA
      </div>

      <div className="footer-content">

        {/* LEFT */}

        <div className="footer-column">

          <h2>Lakshaya 2027</h2>

          <p>
            India's premier collegiate sports festival hosted by IIT Indore,
            bringing together athletes from across the nation to celebrate
            excellence, passion, and sportsmanship.
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-column">

          <h2>Contact For Events</h2>

          <div className="contact-item">

            <strong>Samarth Sharma</strong>

            <span>Public Relations Manager</span>

            <p>+91 8928088784</p>

          </div>

          <div className="contact-item">

            <strong>Sajal Jain</strong>

            <span>Accommodation Manager</span>

            <p>+91 9140222151</p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="footer-column">

          <h2>Contact</h2>

          <div className="contact-item">

            <strong>Jagrit</strong>

            <span>Overall Coordinator</span>

            <p>+91 6280259964</p>

          </div>

          <div className="contact-item">

            <strong>Nishant Bhalani</strong>

            <span>Events Manager</span>

            <p>+91 9586353536</p>

          </div>

          <h3 className="follow-title">
            Follow Us
          </h3>

          <div className="social-icons">

            <a href="#">
              <FaLinkedin size={28} />
            </a>

            <a href="#">
              <FaInstagram size={28} />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="bottom-line"></div>

        <h1>
          DEFY THE ODDS
        </h1>

        <p>
          © 2027 Lakshaya IIT Indore. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}