import React from "react";
import "./global.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import "./index.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div>
      <Helmet>
      <title>Krikey AI : Text to Animation</title>
        <meta name="description" content="Krikey is an AI Tools company whose products include an AI Text to Animation tool, AI Video to Animation tool and custom AI Animation model training for enterprise customers. Our AI Animation tools shorten the time to generate an animation from 5 days to 5 minutes. AI Animation empowers developers and creators to generate 3D animations in minutes that they can use in games, films, marketing materials and more. Krikey's AI tools are available online at www.krikey.ai today!" />
        <meta name="keywords" content="Krikey, AI Tools, Text to Animation, Video to Animation, AI Animation, 3D animations, games, films, marketing, www.krikey.ai" />
      </Helmet>
      {/* <Frame /> */}
      {/* <Navbar /> */}
      <LandingPage />
    </div>
  );
};

export default App;
