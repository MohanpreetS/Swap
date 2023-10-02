import Link from 'next/link';
import React from 'react';
import PopUpForm from '../contact/PopUpForm';

const CtaSection = () => {
    return (
        <section className="cta-area mt--60 z-index" data-aos="fade-up">
            <div className="container">
                <div className="cta-bg bg-theme">
                    <div className="cta-number">
                        <div className="cta-number-icon mr-30 mt-10">
                            <i className="flaticon-reaction"></i>
                        </div>
                        <div className="cta-number-text fix">
                            {/* <span className="uppercase">Get a Free Consultation</span> */}
                            <h3><a href="tell:6668880000">Get a Free Consultation</a></h3>
                        </div>
                    </div>
                    <div className="cta-description mt-10">
                        <p>Stay up-to-date with the latest technological advancements.</p>
                    </div>
                    <div className="cta-btn text-lg-end text-start mt-10">
                        {/* <Link href="/service" className="theme-btn black-btn">Discover more</Link> */}
                        <PopUpForm btnClass="theme-btn black-btn" label='Contact Us' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;