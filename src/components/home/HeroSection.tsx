"use client"

import React from 'react';
import { Pagination, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

// import slideBg1 from "../../../public/assets/img/slider/slider-1.jpg";
import slideBg1 from "../../../public/assets/img/home/homeWAD.jpg"
// import slideBg2 from "../../../public/assets/img/slider/slider-2.jpg";
import slideBg2 from "../../../public/assets/img/home/homeERP.jpg";
// import slideBg2 from "../../../public/assets/img/home/homeERP2.jpg";
// import slideBg3 from "../../../public/assets/img/slider/slider-3.jpg";
import slideBg3 from "../../../public/assets/img/home/homeSEO.jpg";
import slideBg4 from "../../../public/assets/img/home/homeIT.jpg";
import slideBg5 from "../../../public/assets/img/home/homeCYB.jpg";
import shape1 from "../../../public/assets/img/slider/slider-shape-1.png";
import shape2 from "../../../public/assets/img/slider/slider-shape-2.png";
import Image from 'next/image';
import { heroType } from '@/interFace/interFace';
import PopUpForm from '../contact/PopUpForm';

const hero_slider: heroType[] = [
  {
    id: 1,
    slideBg: slideBg1,
    title: <>Web & Mobile <br /> Development</>,
    subTitle: "Welcome to Swap Solutions",
    btn: "Request a Quote",
    shapeA: shape1,
    shapeB: shape2,
    classx: "kslider--title mb-40",
    classy: "kslider--subtitle mb-25"
  },
  {
    id: 2,
    slideBg: slideBg2,
    title: <>ERP & CRM <br />Software</>,
    subTitle: "Welcome to Swap Solutions",
    btn: "Request a Quote",
    shapeA: shape1,
    shapeB: shape2,
    classx: "kslider--title mb-40",
    classy: "kslider--subtitle mb-25"
  },
  {
    id: 3,
    slideBg: slideBg3,
    title: <>SEO & Lead <br />Generation</>,
    subTitle: "Welcome to Swap Solutions",
    btn: "Request a Quote",
    shapeA: shape1,
    shapeB: shape2,
    classx: "kslider--title mb-40",
    classy: "kslider--subtitle mb-25"
  },
  {
    id: 4,
    slideBg: slideBg4,
    title: <>IT Service <br />Management</>,
    subTitle: "Welcome to Swap Solutions",
    btn: "Request a Quote",
    shapeA: shape1,
    shapeB: shape2,
    classx: "kslider--title mb-40",
    classy: "kslider--subtitle mb-25"
  },
  {
    id: 5,
    slideBg: slideBg5,
    title: <>Cybersecurity <br />Risk Assessment</>,
    subTitle: "Welcome to Swap Solutions",
    btn: "Request a Quote",
    shapeA: shape1,
    shapeB: shape2,
    classx: "kslider--title mb-40",
    classy: "kslider--subtitle mb-25"
  }
]

const HeroSection = () => {
  return (
    <section className="slider-area fix position-relative">
      <div className="slider-active">
        <div>
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true
            }}
            pagination={{ clickable: true }}

          >
            {hero_slider && hero_slider.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                  <div className="slide-bg" style={{ backgroundImage: `url(${item.slideBg.src})` }}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="kslider z-index">
                          <h5 className={item.classy}>{item.subTitle}</h5>
                          <h2 className={item.classx}>{item.title}</h2>
                          <PopUpForm />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-shape shape-1">{item.shapeA && <Image src={item.shapeA} style={{ width: "100%", height: "auto" }} alt="img not found" />}</div>
                  <div className="slide-shape shape-2">{item.shapeB && <Image src={item.shapeB} style={{ width: "100%", height: "auto" }} alt="img not found" />}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="slider-paginations slide-dots"></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
