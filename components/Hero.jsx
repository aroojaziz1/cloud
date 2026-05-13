'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

// REQUIRED CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    { id: 1, desktop: '/assets/banner.jpeg', mobile: '/assets/Banner/m1.webp' },
    { id: 2, desktop: '/assets/Banner2.png', mobile: '/assets/Banner/m2.webp' },
    { id: 3, desktop: '/assets/banner.jpeg', mobile: '/assets/Banner/m3.webp' },
  ];

  return (
    <section className="relative w-full overflow-hidden group">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1500}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className="h-[65vh] md:h-[85vh] lg:h-[95vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full bg-[#f9f9f9] relative">
              {/* DESKTOP BANNER */}
              <div className="hidden md:block w-full h-full relative">
                <Image
                  src={slide.desktop}
                  alt="Luxury Collection Desktop"
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              
              {/* MOBILE BANNER */}
              <div className="block md:hidden w-full h-full relative">
                <Image
                  src={slide.mobile}
                  alt="Luxury Collection Mobile"
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* FIXED NAVIGATION ARROWS */}
        <button className="hero-prev absolute left-2 md:left-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/60 md:text-white/30 hover:text-white transition-all duration-500 flex items-center justify-center">
          <FiChevronLeft className="text-[32px] md:text-[48px]" strokeWidth={1} />
        </button>
        
        <button className="hero-next absolute right-2 md:right-10 top-1/2 -translate-y-1/2 z-30 p-2 text-white/60 md:text-white/30 hover:text-white transition-all duration-500 flex items-center justify-center">
          <FiChevronRight className="text-[32px] md:text-[48px]" strokeWidth={1} />
        </button>
      </Swiper>
    </section>
  );
};

export default Hero;