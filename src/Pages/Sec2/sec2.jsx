import React from "react";
import "./sec2.css";

export default function sec2() {
  return (
    <>
      <section className="section2">
        <div className="sec2Title">
          <h2>Ongoing Donation</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur fugit consequatur at vero rem perferendis nihil! Cum
            consequuntur, architecto iusto eligendi facere maxime quis nostrum
            corrupti vel nulla voluptatum quaerat.
          </p>
        </div>
        <div className="sec2cards">
          <div className="sec2-card1">
            <div>
              <img src="" alt="img1"></img>
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
              <img src="" alt="img1"></img>
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
              <img src="" alt="img1"></img>
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
