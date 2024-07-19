import React from "react";
import "./sec2.css";
import img1 from "../../assets/sec2img1.jpg";
import img2 from "../../assets/sec2img2.jpg";
import img3 from "../../assets/sec2img3.jpg";

export default function sec2() {
  return (
    <>
      <section className="section2">
        <div className="sec2Title">
          <h1>Ongoing Donation</h1>
          <p>See how you can make a difference in the world for generations</p>
        </div>
        <div className="sec2cards">
          <div className="sec2-card1">
            <div>
              <img id="images" src={img1} alt="img1"></img>
              <h2>Accessible Education For All People of Colours</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                molestias architecto magnam consequuntur voluptatum itaque
                officia repellendus? Iusto, eaque officia ea harum commodi autem
                minima reprehenderit impedit eveniet voluptas quae.
              </p>
            </div>
            <div className="wrapper-sec2">
              <div>
                <p>Reached</p>
                <b>$32000</b>
              </div>
              <button> Click </button>
            </div>
          </div>
          <div className="sec2-card2">
            <div>
              <img id="images" src={img2} alt="img1"></img>
              <h2>Health Care</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                molestias architecto magnam consequuntur voluptatum itaque
                officia repellendus? Iusto, eaque officia ea harum commodi autem
                minima reprehenderit impedit eveniet voluptas quae.
              </p>
            </div>
            <div className="wrapper-sec2">
              <div>
                <p>Reached</p>
                <b>$32000</b>
              </div>
              <button> Click </button>
            </div>
          </div>
          <div className="sec2-card3">
            <div>
              <img id="images" src={img3} alt="img1"></img>
              <h2>Food Bank</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                molestias architecto magnam consequuntur voluptatum itaque
                officia repellendus? Iusto, eaque officia ea harum commodi autem
                minima reprehenderit impedit eveniet voluptas quae.
              </p>
              <div className="wrapper-sec2">
                <div>
                  <p>Reached</p>
                  <b>$32000</b>
                </div>
                <button> Click </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
