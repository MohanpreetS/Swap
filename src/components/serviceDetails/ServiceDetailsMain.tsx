import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceDetailsContent from './ServiceDetailsContent';

const ServiceDetailsMain = () => {
    return (
        <>
            <Breadcrumb title='Services' subTitle='Services' />
            <ServiceDetailsContent />
        </>
    );
};

export default ServiceDetailsMain;