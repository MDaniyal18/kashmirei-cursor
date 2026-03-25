import "../../../styles/Get-Involved/getinvolved-hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// images
import giImage1 from "../../../assets/Images/I-am.jpg";
import giImage2 from "../../../assets/Images/experiential-learning.webp";
import giImage3 from "../../../assets/Images/career-counselling.webp";

const GetInvolvedHero = () => {
  return (
    // ✅ tabIndex added so section can receive keyboard focus if needed
    <section className="gi-hero" tabIndex={0}>

      <Swiper
        modules={[Pagination, Keyboard]}
        loop={true}
        pagination={{ clickable: true }}

        /* ✅ FIXED KEYBOARD SETTINGS */
        keyboard={{
          enabled: true,
          onlyInViewport: false, // 🔥 KEY FIX (global keyboard control)
          pageUpDown: false,
        }}

        /* ✅ SMOOTH TRANSITION */
        speed={800}

        slidesPerView={1}
        spaceBetween={0}

        className="gi-swiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="gi-slide"
            style={{ backgroundImage: `url(${giImage1})` }}
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="gi-slide"
            style={{ backgroundImage: `url(${giImage2})` }}
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="gi-slide"
            style={{ backgroundImage: `url(${giImage3})` }}
          />
        </SwiperSlide>

      </Swiper>

    </section>
  );
};

export default GetInvolvedHero;