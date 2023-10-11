import React from 'react';
import ServiceFaqSection from './ServiceFaqSection';
import ServiceDetailsSidebar from './ServiceDetailsSidebar';
import Image from "next/image";
import service1 from "../../../public/assets/img/service/service-img-5.jpg";
import service2 from "../../../public/assets/img/service/service-img-6.jpg";

const ServiceDetailsContent = () => {
    return (
        <section className="service-detals pt-60 pb-100 px-3 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="develop-wrapper">
                            {/* <div className="develop-thumb" id='web-dev'>
                                <Image src={service1} style={{ width: "100%", height: "auto" }} alt="img not found" />
                            </div> */}
                            <div className="develop-content" >
                                <h3 className="service-title">Web Development</h3>
                                <p>Swap Solutions specializes in providing comprehensive web development services that cater to a diverse range of industries and business needs. Our experienced team combines technical expertise with a deep understanding of user experience to create websites that not only look impressive but also function seamlessly. We take a collaborative approach, working closely with clients to understand their specific requirements and objectives. Our development process is rooted in industry best practices, ensuring compatibility across different devices and browsers, as well as adherence to modern web standards. Whether {`you're`} looking to build a new website from scratch or enhance an existing one, our team has the capabilities to handle projects of all sizes and complexities. Additionally, we offer post-launch support and maintenance packages to ensure your website remains optimized and up-to-date. With Swap <span id='app-dev'></span>Solutions, you can trust that your web development project will be executed with precision, attention to detail, and a focus on delivering a solution that aligns perfectly with your business goals.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">App Development</h3>
                                <p>Swap Solutions is your trusted partner for comprehensive app development services. Our seasoned team combines technical proficiency with a keen understanding of user behavior to create applications that are intuitive and purposeful. Through close collaboration, we work hand-in-hand with clients to grasp their specific needs and goals. Our development process ensuring smooth performance across various platforms and devices, and compliance with the latest app store guidelines. Whether {`you're`} envisioning a brand-new app or seeking to enhance an existing one, our team is equipped to tackle projects of diverse scopes and complexities. Additionally, we offer post-launch support and maintenance packages to guarantee your app stays optimized and up-to-date.<span id='seo-dev'></span> With Swap Solutions, you can be confident that your app development project will be handled with precision, meticulous attention to detail, and a focus on delivering an application that seamlessly aligns with your business strategy and resonates with your target audience.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">Search Engine Optimization</h3>
                                <p>Elevate your online visibility with our expert SEO services. We use industry-leading strategies to enhance your {`website's`} search engine rankings, driving organic traffic and increasing your online presence. We begin with a comprehensive analysis of your current web presence and competition, allowing us to formulate a tailored SEO strategy. Our approach encompasses keyword research, on-page optimization, technical SEO enhancements, and quality content creation, ensuring that your website is both search engine-friendly and user-centric. We believe in transparency and provide regular performance reports, allowing you to track the progress of your SEO campaign. Additionally, our team stays updated with the latest search engine algorithms, ensuring your website remains in compliance with industry best practices.<span id='dm-dev'></span> With Swap Solutions, you can trust that your SEO campaign will be executed with precision, data-driven insights, and a focus on achieving tangible results for your online presence.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">Digital Marketing</h3>
                                <p>Unlock the full potential of your online presence with our comprehensive digital marketing services. Our seasoned team leverages a diverse range of strategies to drive targeted traffic, boost brand visibility, and maximize conversions. We begin by conducting a thorough analysis of your business goals, target audience, and competition. From there, we craft a customized digital marketing strategy that may include tactics such as pay-per-click advertising, social media management, content marketing, email campaigns, and more. Our approach is data-driven, with a focus on continuous optimization and performance tracking. We believe in transparency and provide regular reports to keep you informed of the progress and ROI of your digital marketing efforts.<span id='erp-dev'></span> Swap Solutions ensures your digital marketing campaign is meticulously executed, harnessing the power of the latest industry trends and technologies to deliver tangible, measurable results for your business.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">ERP Solutions</h3>
                                <p>Empower your business operations with our comprehensive ERP {`(Enterprise Resource Planning)`} solutions. Our experienced team specializes in implementing and customizing ERP systems to streamline processes, enhance productivity, and drive growth. We begin by conducting a thorough analysis of your business workflows and requirements, ensuring a tailored ERP solution that aligns seamlessly with your operations. Our expertise covers various ERP platforms, allowing us to recommend and implement the most suitable solution for your specific industry and organizational needs. Our approach emphasizes scalability, enabling your ERP system to grow alongside your business.<span id='crm-dev'></span> We provide comprehensive training and ongoing support to ensure your team maximizes the benefits of the ERP system to transform the way you manage your resources and drive business success.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">CRM Solutions</h3>
                                <p>Optimize your customer relationships with our tailored CRM {`(Customer Relationship Management)`} solutions. Our expert team specializes in implementing and customizing CRM systems to help businesses build stronger connections, improve customer satisfaction, and drive revenue growth. Starting with a thorough analysis of your business processes and customer engagement strategies, we craft a CRM solution that aligns seamlessly with your objectives. Our proficiency covers various CRM platforms, allowing us to recommend and implement the most suitable solution for your industry and organizational needs. We focus on user-friendly interfaces and intuitive workflows to ensure your team can easily leverage the CRM system. Additionally, we provide comprehensive training and ongoing support to help your team get the most out of the CRM platform.<span id='cra-dev'></span> With Swap Solutions, you can be confident that our CRM solution will contribute to meaningful, long-lasting customer relationships that fuel business growth.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">Cybersecurity Risk Assessment</h3>
                                <p>Secure your digital landscape with our comprehensive Cybersecurity Risk Assessment services. We specialize in evaluating, identifying, and mitigating potential security risks to fortify your digital infrastructure. Beginning with a comprehensive analysis of your existing security measures, systems, and potential vulnerabilities, we develop a tailored Cybersecurity Risk Assessment plan. This includes a thorough examination of network configurations, data handling processes, access controls, and threat monitoring protocols. Our approach prioritizes proactive measures to safeguard against emerging cyber threats. We stay up-to-date with the latest industry standards and threat intelligence, ensuring your organization remains protected against evolving risks. With Swap Solutions, you can trust that your Cybersecurity Risk Assessment<span id='it-dev'></span> will be conducted with precision, attention to detail, and a focus on providing you with a clear understanding of your current security posture along with actionable recommendations to enhance your defenses.</p>
                            </div>
                            <div className="develop-content" >
                                <h3 className="service-title">IT Service Management</h3>
                                <p>Elevate your IT operations with our comprehensive IT Service Management {`(ITSM)`} services. Our experienced team specializes in optimizing IT processes and workflows to enhance efficiency, reduce downtime, and ensure seamless service delivery. Starting with a thorough assessment of your current IT infrastructure and service delivery model, we design a customized ITSM strategy tailored to your specific business needs. Our expertise covers various ITSM frameworks, allowing us to recommend and implement the most suitable solution for your organization. We prioritize user-centric support and seamless incident resolution to ensure your team experiences minimal disruptions. Additionally, we provide training and ongoing support to empower your IT team in effectively utilizing the ITSM platform. With Swap Solutions, you can trust that your IT Service Management solution will be implemented with precision, meticulous attention to detail, and a focus on delivering a streamlined IT environment that supports your business objectives.</p>
                            </div>
                        </div>

                        {/* <div className="planning-wrapper pt-50">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-thumb mb-md-40 mb-xs-40">
                                        <Image src={service2} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-content">
                                        <h4>planning & strategy</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <ul>
                                            <li><i className="fal fa-check"></i>Research beyond the business plan</li>
                                            <li><i className="fal fa-check"></i>Marketing options and rates</li>
                                            <li><i className="fal fa-check"></i>The ability to turnaround consulting</li>
                                            <li><i className="fal fa-check"></i>Customer engagement matters</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">
                                        <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <ServiceFaqSection /> */}
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
                        <ServiceDetailsSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsContent;