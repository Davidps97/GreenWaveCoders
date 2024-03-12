import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="footer-left-side">
          <div className="footer-left-top">
            <p>Socials: </p>
            <div className="footer-icons">
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
            </div>
          </div>
          <div className="footer-left-bottom">
            <p>- Cookies:</p>
            <p>- About us:</p>
            <p>- Rigths:</p>
          </div>
        </div>
        <div className="footer-right-side">
          <div className="footer-right-top">International Project: </div>
          <div className="footer-right-bottom">
            <div className="footer-flags"></div>
            <div className="footer-flags"></div>
            <div className="footer-flags"></div>
            <div className="footer-flags"></div>
            <div className="footer-flags"></div>
            <div className="footer-flags"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
