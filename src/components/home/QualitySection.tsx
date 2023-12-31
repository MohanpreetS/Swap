import React from 'react';
import Image from "next/image";
import quality1 from "../../../public/assets/img/icon/service-icon-1a.png";
import quality2 from "../../../public/assets/img/home/homeWAD.jpg";

const QualitySection = () => {
    return (
        <section className="quality-area pt-120 pb-90 fix d-none d-lg-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <Image src={quality1} style={{ width: "auto", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="kquality-text fix">
                                <h3 className="mb-20 kquality-text-title">We Deliver the Best Quality</h3>
                                <p>Explore how Swap Solutions helps businesses establish and maintain a consistent and impactful online brand presence.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <div className="kquality-img">
                                <Image src={quality2} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default QualitySection;