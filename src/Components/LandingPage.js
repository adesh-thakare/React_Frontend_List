import React from "react";
import Frame from "../Frame";
import FrameMain from "./FrameMain";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "80px",
          width: "100%",
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          // height: "calc(1063px - 80px)",
          height: "auto",
          width: "100%",
        }}
      >
        <FrameMain />
      </div>
    </div>
  );
};

export default LandingPage;
