import React from 'react';
import Link from 'next/link';
// import breadcrumbBg from "../../../../public/assets/img/bg/breadcrumb-bg.jpg";
import breadcrumbBgA from "../../../../public/assets/img/home/homeIT.jpg";
import breadcrumbBgS from "../../../../public/assets/img/home/homeWAD.jpg";
import breadcrumbBgC from "../../../../public/assets/img/home/contactTOP.jpg";

interface PropsData {
   title: string | undefined,
   subTitle: string | undefined,
   page: string,
}

const Breadcrumb = ({ title, subTitle, page = 'about' }: PropsData) => {
   var imgPath = breadcrumbBgA.src;
   if (page === 'contact') {
      imgPath = breadcrumbBgC.src;
   } else if (page === "services") {
      imgPath = breadcrumbBgS.src;
   }

   return (
      <>
         <section className="page-title-area breadcrumb-spacing" style={{ backgroundImage: `url(${imgPath})` }}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-9">
                     <div className="page-title-wrapper text-center">
                        <h3 className="page-title mb-25">{title}</h3>
                        <div className="breadcrumb-menu">
                           <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                              <ul className="trail-items">
                                 <li className="trail-item trail-begin"><Link href="/"><span className="trail-color">Home</span></Link></li>
                                 <li className="trail-item trail-end"><span>{subTitle}</span></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Breadcrumb;