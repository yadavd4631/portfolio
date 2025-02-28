import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./RootLayout";
import Header from "./src/files/Header";
import HeroSection from "./src/files/Hero";
import Projects from "./src/files/Projects";
import Tape from "./src/files/Tape";
import Testimonial from "./src/files/Testimonials";
import About from "./src/files/About";
import Contact from "./src/files/Contact";
import Footer from "./src/files/Footer";
import Contacts from "./api/Contacts";

const AppLayout = () => {
  return (
    <RootLayout>
      <Header />
      <HeroSection />
      <Projects />
      <Tape />
      <Testimonial />
      <About />
      <Contact />
     
      <Footer />
    </RootLayout>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
