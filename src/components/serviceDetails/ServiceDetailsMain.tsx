import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceDetailsContent from './ServiceDetailsContent';
import Breadcrumb2 from '../common/breadcrumb/Breadcrumb2';

const ServiceDetailsMain = () => {
    return (
        <>
            <Breadcrumb2 title='Services' subTitle='Services' page='services' />
            <ServiceDetailsContent />
        </>
    );
};

export default ServiceDetailsMain;