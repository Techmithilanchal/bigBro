"use client";
import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import PhotoSlider from "./PhotoSlider";
import NearbyCities from "./NearbyCities";
import Collections from "./Collections";
import Footer from "./Footer";
// import MobileNav from "./MobileNav";

const BigBro = () => {
  return (
    <div>
      {/* <MobileNav /> */}
      <NavBar />
      <Hero />
      <SearchBar />
      <PhotoSlider />
      <NearbyCities />
      <Collections />
      <Footer />
    </div>
  );
};

export default BigBro;
