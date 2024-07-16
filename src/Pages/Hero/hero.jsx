import React from "react";
import "./hero.css";

export default function hero() {
  return (
    <>
      <div className="heroimg">
        <img src="../../../public/heroimg.jpg" alt="This is a image"></img>
      </div>

      <div className="Numerics">
        <div className="box1">
          <p>$1M+</p>
          <p>Fund Raised</p>
        </div>
        <div className="box2">
          <p>$1M+</p>
          <p>Fund Raised</p>
        </div>
        <div className="box3">
          <p>$1M+</p>
          <p>Fund Raised</p>
        </div>
        <div className="box4">
          <p>$1M+</p>
          <p>Fund Raised</p>
        </div>
      </div>
    </>
  );
}
