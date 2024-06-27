import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import CallToAction from "./CallToAction";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Home;
