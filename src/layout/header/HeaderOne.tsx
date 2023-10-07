"use client"

import React, { useContext } from "react";
// import logo from "../../../public/assets/img/logo/logo-white.png";
import logo from "../../../public/assets/img/logo/swap_logo_white.png";
import Image from "next/image";
import { AppContext } from "@/contextApi/AppProvider";
import Link from "next/link";
import { AppContextType } from "@/interFace/interFace";
import useScrollDirection from "@/hooks/sticky-header";
import Menus from "./Menus";
import HeaderSearch from "./HeaderSearch";
import MobileMenu from "./MobileMenu";
import PopUpForm from "@/components/contact/PopUpForm";

const HeaderOne = () => {
  const { toggleSideMenu, sideMenuOpen, toggleSearchMenu } = useContext(AppContext) as AppContextType;
  const scrollDirection = useScrollDirection(null)
  return (
    <>
      <header>
        <div className={`transparent-header ${scrollDirection === "down" ? "sticky-header" : ""}`}>
          <div className="container-fluid">
            <div className="header-space">
              <div className="row align-items-center">
                <div className="col-xl-2 col-5">
                  <div className="header-logo">
                    <Link href="/"><Image src={logo} style={{ width: "100%", height: "auto" }} alt="header logo" /></Link>
                  </div>
                </div>
                <div className="col-xl-7 d-xl-block d-none">
                  <div className="main-menu d-xl-block d-none">
                    <nav id="mobile-menu">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="d-xl-none col-7 d-flex justify-content-end">
                  <div className="side-menu-icon d-xl-none text-end d-flex">
                    {/* <div className="mr-10">
                      <PopUpForm btnClass="theme-btn theme-btn-small border-btn" />
                    </div> */}
                    <button type="button" className="side-toggle" onClick={toggleSideMenu}>
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                {/* <div className="col-xl-7 col-6">
                  <div className="main-menu d-xl-block d-none">
                    <nav id="mobile-menu">
                      <Menus />
                    </nav>
                  </div>
                  <div className="side-menu-icon d-xl-none text-end d-flex">
                    <PopUpForm isSmall={true} />
                    <button type="button" className="side-toggle" onClick={toggleSideMenu}>
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div> */}
                <div className="col-xl-3 d-none d-xl-block">
                  <div className="header-right text-end">
                    <PopUpForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <HeaderSearch />
      <MobileMenu />
      <div onClick={toggleSideMenu} className={sideMenuOpen ? "body-overlay show" : "body-overlay"}></div>
    </>
  );
};

export default HeaderOne;
