import React from 'react';

const AboutWhyWeSection = () => {
    return (
        <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                {/* <h5 className="section-subtitle mb-20">All Categories List</h5> */}
                                <h2 className="section-title mb-35">Why Choose us</h2>
                            </div>
                            {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                            </p> */}
                            <div className="why-tab-list">
                                <ul>
                                    <li><i className="far fa-check"></i>Expertise: Seasoned professionals with extensive experience in web and app development.</li>
                                    <li><i className="far fa-check"></i>Tailored Solutions: Customized designs and functionalities to meet specific business needs.</li>
                                    <li><i className="far fa-check"></i>Attention to Detail: Meticulous approach to ensure every aspect of the project is polished and refined.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Can Swap Solutions handle both small-scale and large-scale projects?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Absolutely. Swap Solutions is equipped to handle projects of all sizes, from small business websites to complex enterprise-level applications. We tailor our approach to suit your specific requirements.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What industries does Swap Solutions cater to?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Swap Solutions has experience working across various industries including e-commerce, restaurant, transport, entertainment, and more. Our adaptable approach ensures a tailored solution for your specific sector.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Does Swap Solutions provide ongoing support and maintenance after project completion?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Yes, we offer post-launch support packages to ensure your website or app remains optimized and up-to-date. Our team is committed to providing ongoing assistance for a seamless digital experience.</p>
                                        </div>
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

export default AboutWhyWeSection;