import React, { useRef } from "react";
import "../../styles/hero.css";
import heroImage from "../../assets/Images/hero-home.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {

  const swiperRef = useRef(null);

  return (
    <section className="section-hero">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-content">

          <Swiper
            modules={[Navigation]}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="hero-text-swiper"
          >

            <SwiperSlide>
              <div className="hero-slide">
                <h1>
                  Empowering Bright <br />
                  Futures in <span>Kashmir</span>
                </h1>

                <h2 className="hero-subheading">
                  Every Dream Deserves a Chance
                </h2>

                <p>
                  Our mission is to empower extraordinary but financially
                  challenged students to realize their full potential through
                  mentoring, training opportunities, and financial support.
                </p>

                <a href="#" className="hero-btn">
                  DONATE NOW
                </a>
              </div>
            </SwiperSlide>

            {/* Same text for testing */}
            <SwiperSlide>
              <div className="hero-slide">
                <h1>
                  Empowering Bright <br />
                  Futures in <span>Kashmir</span>
                </h1>

                <h2 className="hero-subheading">
                  Every Dream Deserves a Chance
                </h2>

                <p>
                  Our mission is to empower extraordinary but financially
                  challenged students to realize their full potential through
                  mentoring, training opportunities, and financial support.
                </p>

                <a href="#" className="hero-btn">
                  DONATE NOW
                </a>
              </div>
            </SwiperSlide>

          </Swiper>

          {/* CUSTOM ARROWS */}
          <div className="hero-arrows">
            <div
              className="hero-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              ←
            </div>

            <div
              className="hero-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              →
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImage} alt="KEI Scholars" />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
