"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";

const ProductCard = ({ product, onQuickView }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <div className="group relative flex flex-col items-center bg-white cursor-pointer w-full">
      <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#f4f4f4]">
        {/* Mobile Link Overlay */}
        <div className="absolute inset-0 z-10 md:hidden" onClick={handleCardClick} />

        <Swiper
          modules={[Navigation]}
          nested={true}
          allowTouchMove={true}
          navigation={{
            nextEl: `.next-${product.id}`,
            prevEl: `.prev-${product.id}`,
          }}
          className="h-full w-full"
        >
          {product.images.map((img, i) => (
            <SwiperSlide key={i} onClick={handleCardClick}>
              <div className="relative h-full w-full">
                <Image
                  src={img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover select-none transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <button className={`prev-${product.id} absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-white/40 p-2 opacity-0 transition-opacity group-hover:opacity-100 hidden md:flex hover:bg-white/60`}>
            <FiChevronLeft size={18} />
          </button>
          <button className={`next-${product.id} absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-white/40 p-2 opacity-0 transition-opacity group-hover:opacity-100 hidden md:flex hover:bg-white/60`}>
            <FiChevronRight size={18} />
          </button>
        </Swiper>

        {/* Quick View Button (Visible only on Desktop) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-0 left-0 z-30 w-full bg-white/90 py-4 text-[10px] font-bold tracking-[0.2em] transition-all duration-500 translate-y-full group-hover:translate-y-0 hidden md:block uppercase text-[#171717] hover:bg-black hover:text-white shadow-sm"
        >
          QUICK VIEW
        </button>
      </div>

      {/* Info Section */}
      <div className="mt-4 text-center w-full pb-4" onClick={handleCardClick}>
        <h3 className="text-[13px] text-[#171717] font-normal uppercase tracking-widest mb-1 px-2 line-clamp-1 transition-colors group-hover:text-gray-500">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;