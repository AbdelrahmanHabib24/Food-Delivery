import { assets } from "../../assets/assets"
import './footer.css'
const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-contact-left">
                <img src={assets.logo} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore placeat distinctio, a delectus vitae omnis odio consectetur laboriosam ducimus, dolore doloremque minus iste explicabo ab quia obcaecati? Quos, quas. Iste?
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+(20)1023269654</li>
                <li>contact@tomato.com</li>
              </ul>

            </div>
        </div>
        <hr/>
        <p className="Footer-copyright">Copyright 2024 c Tomato.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
