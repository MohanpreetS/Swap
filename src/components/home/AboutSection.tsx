import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import about1 from "../../../public/assets/img/about/about-img-1.jpg";
import about2 from "../../../public/assets/img/about/about-img-2.jpg";
import aboutIcon from "../../../public/assets/img/icon/about-icon.png";

const AboutSection = () => {
    return (
        <section className="about-area pt-120 pb-70 fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up">
                            <div className="kabout-img-shape"></div>
                            <Image src={about1} style={{ width: "100%", height: "auto" }} alt="about-img" />
                            <div className="kabout-img-small">
                                <Image src={about2} style={{ width: "100%", height: "auto" }} alt="about-img" />
                                <div className="kabout-img-small-icon play_btn">
                                    <span>
                                        <Image src={aboutIcon} style={{ width: "auto", height: "auto" }} alt="about-icon" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="kabout-btn">
                            <Link href="/service" className="theme-btn border-btn">Discover more</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="kabout mb-50" data-aos="zoom-out-down">
                            <div className="section-title-wrapper mb-45">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">Welcome to<br />Swap Solutions</h2>
                                <p>Welcome to Swap Solutions, where innovation meets excellence in the digital realm. We are a dynamic force in the world of web development, SEO optimization, app development, and ERP/CRM solutions. With a passion for crafting seamless user experiences and a commitment to driving online visibility, our team of skilled professionals is dedicated to empowering businesses of all sizes. Whether you're looking to establish a compelling online presence, optimize your search engine rankings, or streamline your operations with cutting-edge software solutions, Swap Solutions is your trusted partner in achieving digital success. Explore our comprehensive suite of services and let us help you navigate the ever-evolving landscape of the digital world.</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="kabout-service mb-30">
                                        <h4 className="kabout-service-title">The Best Services</h4>
                                        <p>Stay up-to-date with the latest technological advancements.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="kabout-service mb-30">
                                        <h4 className="kabout-service-title">Expert Designers</h4>
                                        <p>Stay up-to-date with the latest technological advancements.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <ul className="mt-20 mb-55">
                                <li><i className="fal fa-check"></i> Digital Marketing Strategies.</li>
                                <li><i className="fal fa-check"></i> E-commerce Solutions.</li>
                                <li><i className="fal fa-check"></i> Social Media Management.</li>
                            </ul> */}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;