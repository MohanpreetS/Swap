"use client"

import React from 'react';
import { A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import Image from "next/image";
import testimonial1 from "../../../public/assets/img/testimonial/testimonial-img-1.jpg";
import testimonial2 from "../../../public/assets/img/testimonial/testimonial-img-2.jpg";
import testimonial3 from "../../../public/assets/img/testimonial/testimonial-img-3.jpg";
import testimonial4 from "../../../public/assets/img/testimonial/testimonial-img-4.jpg";
import testimonial5 from "../../../public/assets/img/testimonial/testimonial-img-5.jpg";

interface classType {
    testimonial_space: string;
}

const TestimonialSection = ({ testimonial_space }: classType) => {
    return (
        <section className={`${testimonial_space ? testimonial_space : 'testimonial-area pt-80 pb-70'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper text-center mb-45">
                            <h5 className="section-subtitle mb-20">client testimonials</h5>
                            <h2 className="section-title mb-35">What they say?</h2>
                        </div>
                    </div>
                </div>
                <div className="testimonial-active">
                    <div>
                        <Swiper
                            modules={[A11y, Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            speed={1500}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 3
                                }
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Exceptional work! Their attention to detail and user-centric approach resulted in a stunning website that perfectly captures our brand image. </p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        {/* <div className="ktestimonial-author-img">
                                            <Image src={testimonial1} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div> */}
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Nirmaljot</h5>
                                            <span className="uppercase">Mozart Logistics</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p> The site not only looks fantastic but also performs flawlessly. Their expertise and commitment truly set them apart. Thrilled with the results.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        {/* <div className="ktestimonial-author-img">
                                            <Image src={testimonial2} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div> */}
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Simran</h5>
                                            <span className="uppercase">Casa Framing</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Top-notch website! The website they delivered is sleek, functional, and truly represents our brand. {`Couldn't`} be happier with their services!</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        {/* <div className="ktestimonial-author-img">
                                            <Image src={testimonial3} style={{ width: "100%", height: "auto" }} alt="client-img" />
                                        </div> */}
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Ajay</h5>
                                            <span className="uppercase">Bison Oilfield Equipments</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Swap Solutions elevated our online presence with their stellar work. From concept to execution, their {`team's`} expertise shone through.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Amarjit</h5>
                                            <span className="uppercase">Bk International</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Swap Solutions brings visions to life. Their web development expertise is exceptional, delivering optimized and visually stunning products.</p>
                                    </div>
                                    <div className="ktestimonial-author">

                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Bhulinder</h5>
                                            <span className="uppercase">Rodhos</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;