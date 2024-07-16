import React from "react";
import "./sec3.css";
import img from "../../assets/lovesymbol.png";

export default function Sec3() {
  return (
    <>
      <section className="section3">
        <div className="section3-wrapper">
          <div className="sec3-text">
            <div>
              <h2>OverComing the issues with our true values</h2>
            </div>
            <div className="sec3-cards">
              <div>
                <img alt="Image goes here" src={img}></img>
              </div>
              <div className="textwrapper">
                <h3>Empower Women</h3>
                <p>
                  Our primary mission is to empower women by providing them with
                  access to education, skills, and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="sec3-text">
            <div className="sec3-cards">
              <div>
                <img alt="Image goes here" src={img}></img>
              </div>
              <div className="textwrapper">
                <h3>Empower Women</h3>
                <p>
                  Our primary mission is to empower women by providing them with
                  access to education, skills, and resources.
                </p>
              </div>
            </div>
          </div>
          <div className="sec3-text">
            <div className="sec3-cards">
              <div>
                <img alt="Image goes here" src={img}></img>
              </div>
              <div className="textwrapper">
                <h3>Empower Women</h3>
                <p>
                  Our primary mission is to empower women by providing them with
                  access to education, skills, and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3-image">
          <img alt="Image goes here"></img>
        </div>
      </section>
    </>
  );
}
