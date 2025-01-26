import '../components/profile.css';
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { TypingEffect } from './TypingEffect';

export const Profile = () => {
  return (
    <div className="portfolio-container">
      <div className="content-wrapper" id="about">
        <section className="home">
          {/* Left Section: Content */}
          <div className="home-content" id="Skills">
            <h1>Hi, I am</h1>
            <h1 className="name" contentEditable="true" style={{ color: "cyan" }}>
              <TypingEffect text="SaikumarHanumanth" speed={150} pause={2000} />
            </h1>
            <h3>I am a WebDev and AppDev</h3>
            <p style={{ fontFamily: "'Poppins', sans-serif" }}>
              I am eager to apply my skills in various domains, continuously pushing myself to expand my
              knowledge and capabilities. My dedication to excellence ensures that I approach every task with
              meticulous attention to detail and a strong work ethic. I am confident in my ability to make
              significant contributions to any project I undertake.
            </p>
            <div className="home-social">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/saikumar-hanumanthu-bb9530325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} color="skyblue" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/n20095719707?t=u51JGpvy9XXDEPmYomRoqA&s=09" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter size={30} color="white" />
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@saisonu1620?si=kB8lz4sbdnOD1HlI" target="_blank" rel="noopener noreferrer">
                    <IoLogoYoutube size={30} color="red" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/saisonu1156?igsh=eHMxbHducnNjdTI5" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} color="darkblue" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="image-container">
            <img
              src="SRI_1817.JPG"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
