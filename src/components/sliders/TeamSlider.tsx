import { Swiper, SwiperSlide } from "swiper/react";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon";
import RightArrowIcon from "../../assets/icons/RightArrowIcon";
import { useState } from "react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const TeamSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="px-[112px] py-[96px] bg-[#F9FAFB]">
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        onSwiper={setSwiperInstance}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation={false}
        pagination={false} // Disabled pagination to avoid interference with fade effect
        fadeEffect={{
          crossFade: true, // Ensures smooth fade effect between slides
        }}
        className="w-full h-full"
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="flex items-center justify-between gap-16">
            <div className="right-box flex-1 max-w-[calc(50%-4rem)]">
              <div className="rating mb-12">11111</div>
              <div className="thoughts text-black font-franie text-[36px] leading-[150%] mb-12">
                The work environment is fantastic, and I love the challenges I
                face every day.
              </div>
              <div className="staff flex items-center">
                <img
                  src="/images/staff/avatar1.png"
                  alt=""
                  className="img-fluid staff-avatar mr-4"
                />
                <div className="info">
                  <div className="name text-[#101828] text-lg font-semibold leading-[1.75rem] mb-1">
                    Muhammad Nazarov
                  </div>
                  <div className="position text-[#475467] text-base font-normal leading-[1.5rem]">
                    Project Manager, Unibaze
                  </div>
                </div>
                <div className="slider-button ml-auto flex gap-6">
                  <button
                    onClick={handlePrev}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <LeftArrowIcon />
                  </button>
                  <button
                    onClick={handleNext}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <RightArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="left-box h-[45rem] w-full max-w-[38rem] rounded-lg overflow-hidden">
              <img
                src="/images/staff/s1.png"
                alt=""
                className="img-fluid staff-img w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between gap-16">
            <div className="right-box flex-1 max-w-[calc(50%-4rem)]">
              <div className="rating mb-12">11111</div>
              <div className="thoughts text-black font-franie text-[36px] leading-[150%] mb-12">
                I've been welcomed warmly to the team and now I never want to
                leave.
              </div>
              <div className="staff flex items-center">
                <img
                  src="/images/staff/avatar1.png"
                  alt=""
                  className="img-fluid staff-avatar mr-4"
                />
                <div className="info">
                  <div className="name text-[#101828] text-lg font-semibold leading-[1.75rem] mb-1">
                    Ali Safarov
                  </div>
                  <div className="position text-[#475467] text-base font-normal leading-[1.5rem]">
                    Project Manager, Unibaze
                  </div>
                </div>
                <div className="slider-button ml-auto flex gap-6">
                  <button
                    onClick={handlePrev}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <LeftArrowIcon />
                  </button>
                  <button
                    onClick={handleNext}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <RightArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="left-box h-[45rem] w-full max-w-[38rem] rounded-lg overflow-hidden">
              <img
                src="/images/staff/s2.png"
                alt=""
                className="img-fluid staff-img w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-between gap-16">
            <div className="right-box flex-1 max-w-[calc(50%-4rem)]">
              <div className="rating mb-12">11111</div>
              <div className="thoughts text-black font-franie text-[36px] leading-[150%] mb-12">
                Because I dream big, I work there.
              </div>
              <div className="staff flex items-center">
                <img
                  src="/images/staff/avatar1.png"
                  alt=""
                  className="img-fluid staff-avatar mr-4"
                />
                <div className="info">
                  <div className="name text-[#101828] text-lg font-semibold leading-[1.75rem] mb-1">
                    Ali Safarov
                  </div>
                  <div className="position text-[#475467] text-base font-normal leading-[1.5rem]">
                    Project Manager, Unibaze
                  </div>
                </div>
                <div className="slider-button ml-auto flex gap-6">
                  <button
                    onClick={handlePrev}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <LeftArrowIcon />
                  </button>
                  <button
                    onClick={handleNext}
                    className="s-btn flex w-14 h-14 justify-center items-center gap-3 rounded-full border border-[#EAECF0] bg-white bg-opacity-90 backdrop-blur-sm"
                  >
                    <RightArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="left-box h-[45rem] w-full max-w-[38rem] rounded-lg overflow-hidden">
              <img
                src="/images/staff/s6.png"
                alt=""
                className="img-fluid staff-img w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSlider;
