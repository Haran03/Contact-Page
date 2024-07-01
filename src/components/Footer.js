
function Footer() {
  return (
    <footer>
      <div className="footer-content">  
        <div className="company-info">
         <div className="comp-img"> <img src="bbb.svg" /></div>
          <p>123 Example St, City, Country</p>
          <p>Phone: +1234567890</p>
          <p>Email: info@example.com</p>
          <div className="follow">
            <h2>Follow Us On</h2>
            <a href="www.facebook.com"><img src="facebook.svg" alt="facebook" /></a>
            <a href ="www.twitter.com"><img src="twitter.svg" alt="twitter" /></a>
            <a href ="www.instagram.com"><img src="insta.svg" alt="instagram" /></a>
            <a href ="www.youtube.com"><img src="youtube.svg" alt="youtube" /></a>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><img src="arrow.svg"/><a href="#home">Home</a></li>
            <li><img src="arrow.svg"/><a href="#about">About</a></li>
            <li><img src="arrow.svg"/><a href="#services">Services</a></li>
            <li><img src="arrow.svg"/><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="services">
          <h3>Services</h3>
          <div className="services">
          <ul>
            <details>

            <summary>Services we offer</summary>
            <li><img src="arrow.svg"/>Service 1</li>
            <li><img src="arrow.svg"/>Service 2</li>
            <li><img src="arrow.svg"/>Service 3</li>
            <li><img src="arrow.svg"/>Service 4</li>
            <li><img src="arrow.svg"/>Service 5</li>
            </details>
          </ul>
          </div>
        </div>
        <div className="information">
          <h3>Information</h3>
          <div className="info-item">
          <img src="call.svg" alt="Phone" />
          <p>Phone: +1234567890</p>
        </div>
        <div className="info-item">
          <img src="email.svg" alt="Email" />
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        <div className="info-item">
          <img src="map.svg" alt="Address" />
          <p>Address: 123 Example St, City, Country</p>
        </div>

        <div>
         <h3>Opening Hours</h3>
          <p>Monday - Saturday (9 A.M to 7 P.M)</p>
        </div>

        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 HAYAT IND. All rights reserved.</p>
      </div>
     
    </footer>
  );
}
export default Footer;  