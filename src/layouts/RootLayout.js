import { Element } from "react-scroll";
import { useState } from "react";

import SideBar from "../components/SideBar";
import NavBarButton from "../components/NavBarButton";
import ScrollToTopButton from "../components/ScrollToTop";

import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

import Footer from "../components/Footer";
import Testimonials from "../pages/Testimonials";

function RootLayout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      <SideBar isVisible={navOpen} />
      <main className={`main ${navOpen ? "sidebar-active" : ""}`}>
        <Element name="HOME">
          <Home />
        </Element>
        <Element name="ABOUT">
          <About />
        </Element>
        <Element name="RESUME">
          <Resume />
        </Element>
        <Element name="SERVICE">
          <Service />
        </Element>
        <Element name="PORTFOLIO">
          <Portfolio />
        </Element>
        <Element name="TESTIMONIALS">
          <Testimonials />
        </Element>
        <Element name="BLOG">
          <Blog />
        </Element>
        <Element name="CONTACT">
          <Contact />
        </Element>
        <Footer />

        <ScrollToTopButton />
        <NavBarButton setNavOpen={setNavOpen} navOpen={navOpen} />
      </main>
    </div>
  );
}

export default RootLayout;
