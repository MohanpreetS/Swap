import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogDetailsContent from './BlogDetailsContent';
import { idType } from '@/interFace/interFace';

const BlogDetailsMain = ({ id }: idType) => {
    return (
        <>
            <Breadcrumb title='Blog Details' subTitle='Blog Details' page='about' />
            <BlogDetailsContent id={id} />
        </>
    );
};

export default BlogDetailsMain;