import React from "react";
import "./sec3.css";
import img from "../../assets/lovesymbol.png";
import mimg from "../../assets/sec3img1.jpg";
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
                  At our charity, we believe in the transformative power of
                  empowering women. By providing access to education, vocational
                  training, and financial resources, we aim to uplift women in
                  underserved communities. Our programs focus on developing
                  leadership skills, fostering entrepreneurship, and promoting
                  gender equality. We strive to create a world where every woman
                  has the opportunity to reach her full potential, contribute to
                  her community, and inspire future generations.
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
                <h3>Preserve Nature</h3>
                <p>
                  Our mission to preserve nature is driven by the urgent need to
                  protect our planet's precious resources. Through reforestation
                  projects, wildlife conservation, and sustainable agriculture
                  initiatives, we work tirelessly to combat climate change and
                  safeguard biodiversity. We educate communities on the
                  importance of environmental stewardship and support local
                  efforts to reduce pollution and promote renewable energy
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
                <h3>Nuture Children</h3>
                <p>
                  Children are the heart of our future, and nurturing their
                  growth and development is at the core of our mission. We
                  provide essential resources such as nutritious meals,
                  healthcare, and educational support to children in need. Our
                  programs are designed to create safe and stimulating
                  environments where children can learn, play, and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec3-image">
          <img src={mimg} alt="Image goes here"></img>
        </div>
      </section>
    </>
  );
}
