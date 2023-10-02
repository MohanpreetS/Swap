import Link from 'next/link';
import React from 'react';
import FooterBottom from './FooterBottom';
import Image from "next/image";
import logo from "../../../public/assets/img/logo/swap_logo_white.png";
import icon1 from "../../../public/assets/img/icon/footer-icon-1.png";
import icon2 from "../../../public/assets/img/icon/footer-icon-2.png";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${'/assets/img/service/service-bg.jpg'})` }} className="pt-95 position-relative">
      <div className="common-shape-wrapper wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
        <div className="common-shape-inner wow slideInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
      </div>
      <div className="footer-area pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12 d-flex justify-content-center">
              <div className="widget mb-30">
                <div className="footer-logo mb-25 text-center">
                  <Link href="/"><Image src={logo} style={{ width: "100%", height: "auto", justifySelf: "center" }} alt="footer logo" /></Link>
                </div>
                <p className="mb-20 pr-35 text-center">Transforming Ideas into Seamless Experiences. Elevate your online presence with Swap Solutions, where innovation meets excellence.</p>
                <div className="footer-social text-center mr-30">
                  <Link href="https://www.linkedin.com/company/swap-solutions-canada/about/" target="_blank"><i className="fab fa-linkedin"></i></Link>
                  <Link href="https://www.facebook.com/swapsolutions" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="https://www.instagram.com/swapsolutions/?hl=en" target="_blank"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4  d-flex justify-content-center">
              <div className="widget widget-contact mb-30">
                <h4 className="widget-title mb-35 text-center">Contact</h4>
                <ul>
                  <li className="pb-10 text-center">3768 E Hastings St. <br />Burnaby, BC</li>
                  <li className="pb-10 text-center"><Image src={icon1} style={{ width: "auto", height: "auto" }} alt="footer logo" /><a href="mailto:needhelp@company.com">swapsolutionz@gmail.com
                  </a></li>
                  <li className="pb-10 text-center"><Image src={icon2} style={{ width: "auto", height: "auto" }} alt="footer logo" /><a href="tel:6045000030">+1 604-500-0030</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4  d-flex justify-content-center">
              <div className="widget mb-30 text-center">
                <h4 className="widget-title mb-35">Links</h4>
                <ul>
                  <li><Link href="/service-details">Our Services</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="#portfolio">Our Portfolio</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="widget mb-30">
                <h4 className="widget-title mb-30">Newsletter</h4>
                <p className="mb-20">Subscribe to Our Newsletter for Daily News and Updates</p>
                <div className="widget-newsletter">
                  <form action="#">
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <FooterBottom /> */}
    </footer>
  );
};

export default Footer;