import '../components/footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social-media">
          <a
            href="https://codepen.io/Michela-Artizzu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodePen Profile"
          >
            <i className ="bi bi-telegram "></i>
          </a>
          <a
            href="https://github.com/Michela1983/Michela1983"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.facebook.com/michela.artizzu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Profile"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://x.com/MichelaArtizzu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Profile (Twitter)"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="mailto:michela.artizzu@gmail.com"
            aria-label="Send an Email"
          >
            <i className="bi bi-envelope"></i>
          </a>
          <a
            href="https://wa.me/14388850438"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>

        <div>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <p className="copyright">
          © 2024 | Saikumar. All Rights Reserved
        </p>
      </footer>
    </>
  );
};
