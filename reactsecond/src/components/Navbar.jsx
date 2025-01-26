import "../components/navbar2.css";
import { useState, useEffect, useRef } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#about"); // Default active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  // Refs for DOM elements
  const hamburgerRef = useRef(null);
  const navLinksRef = useRef(null);
  const linksRef = useRef([]);

  const handleSetActive = (id) => {
    setActiveLink(id);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to handle animations for hamburger and nav links
  useEffect(() => {
    // Only run after the first render
    if (isMenuOpen) {
      // Add the "open" class to show nav links
      navLinksRef.current.classList.add("open");
      linksRef.current.forEach((link) => {
        link.classList.add("fade");
      });
      // Add hamburger toggle animation
      hamburgerRef.current.classList.add("toggle");
    } else {
      // Remove the "open" class to hide nav links
      navLinksRef.current.classList.remove("open");
      linksRef.current.forEach((link) => {
        link.classList.remove("fade");
      });
      // Remove hamburger toggle animation
      hamburgerRef.current.classList.remove("toggle");
    }
  }, [isMenuOpen]); // Trigger effect when `isMenuOpen` changes

  return (
    <>
      <div className="portfolio-container">
        <nav>
          <div className="logo">
            <i className="fa-brands fa-nfc-directional fa-2xl"></i>
            <span style={{ fontWeight: "bolder" }}>SaiKumar</span>
          </div>
          <div className="hamburger" ref={hamburgerRef} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav-links" ref={navLinksRef} style={{ fontWeight: "bolder" }}>
            {[
              { id: "#about", label: "About" },
              { id: "#skills", label: "Skills" },
              { id: "#experience", label: "Experience" },
              { id: "#project", label: "Project" },
              { id: "#certificates", label: "Certificates" },
              { id: "#education", label: "Education" },
              { id: "#contact", label: "Contact" },
            ].map((item, index) => (
              <li key={item.id} ref={(el) => (linksRef.current[index] = el)}>
                <a
                  href={item.id}
                  className={activeLink === item.id ? "active" : ""}
                  onClick={() => handleSetActive(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button className="hire-button">Hire Me</button>
            </li>
            <li>
              <a
                href="resume.pdf"
                download="saikumar_resume.pdf"
                className="resume-button"
                style={{ overflow: "hidden" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
