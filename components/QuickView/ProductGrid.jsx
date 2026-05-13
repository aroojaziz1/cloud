"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ProductCard from "./ProductCard";
import QuickViewDrawer from "./QuickViewDrawer";

import "swiper/css";
import "swiper/css/navigation";

const ProductGrid = ({ products, layout = "grid" }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const quickViewRef = useRef(null);

  useEffect(() => {
    if (selectedProduct && quickViewRef.current) {
      setTimeout(() => {
        quickViewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedProduct]);

  if (layout === "slider") {
    return (
      <div className="w-full relative">
        <div className="relative px-0 md:px-4 group/slider">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            loop={true} // Enabled loop to ensure buttons never "disable/hide"
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="!static overflow-visible" 
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  product={product}
                  onQuickView={(p) => setSelectedProduct(selectedProduct?.id === p.id ? null : p)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ PERMANENTLY VISIBLE NAVIGATION (Professional Floating Style) */}
          <button className="swiper-prev-btn absolute left-0 md:-left-6 top-[40%] -translate-y-1/2 z-40 p-2 text-[#171717] opacity-100 cursor-pointer flex items-center justify-center transition-transform hover:scale-125">
            <FiChevronLeft size={36} strokeWidth={1} />
          </button>
          
          <button className="swiper-next-btn absolute right-0 md:-right-6 top-[40%] -translate-y-1/2 z-40 p-2 text-[#171717] opacity-100 cursor-pointer flex items-center justify-center transition-transform hover:scale-125">
            <FiChevronRight size={36} strokeWidth={1} />
          </button>
        </div>

        <div ref={quickViewRef} className="scroll-mt-20">
          <AnimatePresence mode="wait">
            {selectedProduct && (
              <QuickViewDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 px-4 md:px-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={(p) => setSelectedProduct(p)} />
        ))}
      </div>
      <div ref={quickViewRef} className="scroll-mt-20">
        <AnimatePresence mode="wait">
          {selectedProduct && (
            <QuickViewDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductGrid;