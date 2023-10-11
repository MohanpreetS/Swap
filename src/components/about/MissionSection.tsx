import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import mission from "../../../public/assets/img/home/aboutSMALL.jpg";

const MissionSection = () => {
    return (
        <section className="mission-area pt-100 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-50 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                {/* <h5 className="section-subtitle mb-20">get to know us</h5> */}
                                <h2 className="section-title mb-35">Our Mission is to take your business to new heights</h2>
                                {/* <p>We dig deep to understand your business, target audience, and market landscape.</p> */}
                            </div>
                            <p className="mb-25">Welcome to Swap Solutions, where innovation meets excellence in the digital realm. We are a dynamic force in the world of web development, SEO optimization, app development, and ERP/CRM solutions. With a passion for crafting seamless user experiences and a commitment to driving online visibility, our team of skilled professionals is dedicated to empowering businesses of all sizes. Whether you are looking to establish a compelling online presence, optimize your search engine rankings, or streamline your operations with cutting-edge software solutions, Swap Solutions is your trusted partner in achieving digital success. Explore our comprehensive suite of services and let us help you navigate the ever-evolving landscape of the digital world.
                            </p>

                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="kintro-img mb-30 mt-20" data-aos="fade-right" data-aos-duration="1000">
                            <Image src={mission} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            {/* <div className="mission-img-text">
                                <h4>We’re committed to
                                    your growth
                                </h4>
                                <Link href="/contact">Get Started</Link>
                            </div> */}
                        </div>
                        <div className="ktrust-btn text-center">
                            <Link href="/service-details" className="theme-btn border-btn">Discover more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;