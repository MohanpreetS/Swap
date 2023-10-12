import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import author from "../../../public/assets/img/service/service-author.png";

const ServiceSection = () => {
    return (
        <section className="service-area pt-120 pb-80" style={{ backgroundImage: `url(${'/assets/img/service/service-bg.jpg'})` }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-5 col-lg-6">
                        <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                            <h2 className="kservice-text-title">The Services <br />We Offer</h2>
                            <p>Swap Solutions leads the charge in digital transformation, offering a comprehensive suite of services designed to propel businesses into the future. Our expert team specializes in Web and Mobile Development, Lead Generation, SEO, ERP and CRM solutions, Cybersecurity, Risk Assessment, and IT Service Management. We excel at crafting visually stunning and intuitively functional websites, executing data-driven lead generation strategies, and optimizing search engine visibility. Our tailored ERP and CRM solutions streamline operations, while robust cybersecurity measures safeguard your digital assets. With meticulous risk assessments, we fortify your business resilience. At Swap Solutions, we understand your unique needs and deliver results across diverse sectors. Elevate your business with Swap Solutions, where innovation and excellence converge. Contact us today to embark on a transformative journey towards unlocking the full potential of your business.</p>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                        <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-website"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Website <br />Development</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-marketing"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Digital  <br />Marketing</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-profile"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">SEO & Content <br />writing</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-team"></i>
                                    </div>
                                    <div className="kservice-analytics">
                                        <h5 className="kservice-content-title"><Link href="/service-details">ERP & CRM <br />Solutions</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-development"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">Cybersecurity <br />Risk Assessment</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link href="/service-details">IT Service <br />Management</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;