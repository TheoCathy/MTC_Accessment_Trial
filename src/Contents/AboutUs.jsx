import React from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div
        className="bg-red-300"
        style={{
          background:
            "linear-gradient(135deg,rgb(68, 52, 22) 25%, transparent 25%), linear-gradient(225deg,rgb(54, 50, 4) 25%, transparent 25%), linear-gradient(315deg,rgb(37, 20, 8) 25%,rgba(75, 52, 2, 0.68) 25%)",
          backgroundPosition: "10px 0, 10px 0, 2 0, 0 0",
        }}
      >
        <div>
          <Navbar />
        </div>
        <div className="flex items-center justify-center text-white h-screen">
          <h1> ABOUT US PAGE </h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
