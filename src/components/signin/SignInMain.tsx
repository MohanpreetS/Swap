import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import SignInContent from './SignInContent';

const SignInMain = () => {
    return (
        <>
            <Breadcrumb title='Sign In' subTitle='Sign In' page='about' />
            <SignInContent />
        </>
    );
};

export default SignInMain;