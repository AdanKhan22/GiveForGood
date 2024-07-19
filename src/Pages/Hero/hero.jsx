import React from "react";
import "./hero.css";

export default function hero() {
  return (
    <>
      <section className="hero-sec">
        <div className="heroimg">
          <img src="../../../heroimg.jpg" alt="This is a image"></img>
        </div>

        <div className="Numerics">
          <div className="box1">
            <h3>$1M+</h3>
            <p>Fund Raised</p>
          </div>
          <div className="box2">
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>
          <div className="box3">
            <h3>100%</h3>
            <p>Delivered Donations</p>
          </div>
          <div className="box4">
            <h3>250K</h3>
            <p>Charity Participation</p>
          </div>
        </div>
      </section>
    </>
  );
}
