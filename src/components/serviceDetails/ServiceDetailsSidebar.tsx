import Link from 'next/link';
import React from 'react';

const ServiceDetailsSidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="widget_categories grey-bg">
                <h4 className="bs-widget-title pl-20">Categories</h4>
                <ul>
                    <li><a href="#web-dev">Web Developement <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="#app-dev">App Development <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="#seo-dev">Search Engine Optimization <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="#dm-dev">Digital Marketing <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="/service-details#erp-dev">ERP Solutions <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="/service-details#crm-dev">CRM Solutions Solutions <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="/service-details#cra-dev">Cyber Security <i className="far fa-long-arrow-right"></i></a></li>
                    <li><a href="/service-details#it-dev">IT Service Management <i className="far fa-long-arrow-right"></i></a></li>
                </ul>
            </div>
            <div className="widget-btn mt-30">
                <Link href="/contact" className="theme-btn border-btn">get a free estimate</Link>
            </div>
        </div>
        // abc
    );
};

export default ServiceDetailsSidebar;