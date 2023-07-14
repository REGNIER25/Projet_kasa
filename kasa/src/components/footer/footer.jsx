import logokasa2 from './logokasa2.png';
import './footer.css';

function Footer() {
  return (

    <footer className="footer">
      <img src={logokasa2} alt="Logo Kasa" />
      <a className="rights">
        © 2020 Kasa. All rights reserved
      </a>
    </footer>
  );
}

export default Footer;
