"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (name === "" || email === "" || phone === "") {
            return
        }

        const msg = {
            name: name,
            email: email,
            phone: phone,
            message: message,
        };

        console.log(msg);

        fetch('https://matheng-server-97f213847229.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify(msg)
        })

        setName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }


    return (
        <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">contact us</h5>
                            <h2 className="section-title">Speak with our consultant</h2>
                        </div>
                        <div className="contact-info mr-50 mr-xs-0  mr-md-0">
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <Link href="#"><i className="fas fa-phone-alt"></i></Link>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Call Anytime</span>
                                    <h5><Link href="tell:6045000030">+1 604-500-0030</Link></h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <Link href="#"><i className="fal fa-envelope"></i></Link>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>send email</span>
                                    <h5><Link href="mailto:swapsolutionz@gmail.com">swapsolutionz@gmail.com</Link> </h5>
                                </div>
                            </div>
                            {/* <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <Link href="#"><i className="fal fa-map-marker-alt"></i></Link>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>visit office</span>
                                    <h5><Link href="#">86 Road Broklyn Street, New York</Link></h5>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="col-12 d-flex justify-content-center pb-10">
                            <h3 className='section-title'>REQUEST A CALLBACK</h3>
                        </div>
                        <div className="contact-form">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12 mb-20">
                                        <input type="text"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <input type="email"
                                            placeholder="Email Adress"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <input type="tel"
                                            placeholder="Phone"
                                            pattern="[0-9]{10}"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <textarea placeholder="Write Massage (Optional)"
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;