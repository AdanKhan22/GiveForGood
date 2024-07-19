import React from "react";
import "./sec1.css";
import mimg from "../../assets/mainimgsec1.jpg";
import img1 from "../../assets/sec1img2.jpg";
import img2 from "../../assets/sec1img3.jpg";
export default function sec1() {
  return (
    <>
      <section className="section1">
        <div className="sec1images">
          <img src={mimg} alt="main image" id="img1"></img>
          <div>
            <img src={img1} alt="image 1"></img>
            <img src={img2} alt="image 2"></img>
          </div>
        </div>
        <div className="sec1text">
          <h2>Donation for the better of our future World</h2>
          <p>
            Our mission is to bring hope, support, and tangible change to the
            lives of those in need. We believe in the power of community and the
            profound impact that collective action can have on individuals
            facing hardships. Our efforts are dedicated to alleviating poverty,
            improving health and education, and providing essential resources to
            vulnerable populations.
          </p>
          <a>Learn More</a>
        </div>
      </section>
    </>
  );
}
