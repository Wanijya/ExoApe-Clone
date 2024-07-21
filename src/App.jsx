import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Work from "./components/Work";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Spread from "./components/Spread";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full">
      <Nav />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Spread />
      <Footer />
    </div>
  );
};

export default App;
