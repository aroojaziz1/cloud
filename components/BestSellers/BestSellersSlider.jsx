"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

import { products } from "../../data/products"; 
import ProductCard from "../QuickView/ProductCard";
import QuickViewDrawer from "../QuickView/QuickViewDrawer";

import "swiper/css";
import "swiper/css/navigation";

const BestSellersSlider = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const quickViewRef = useRef(null);

  // ✅ IMPROVED AUTO-SCROLL LOGIC
  useEffect(() => {
    if (selectedProduct && quickViewRef.current) {
      // Small delay to let the drawer begin its entry animation
      const timer = setTimeout(() => {
        quickViewRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "center" // Positions the drawer in the middle of the screen
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedProduct]);

  const bestSellers = products
    .filter((p) => p.isBestSeller === true)
    .slice(0, 10); 

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-[24px] font-serif font-normal text-[#171717] mb-2 uppercase tracking-widest">
            Best Sellers
          </h2>
          <Link 
            href="/best-sellers" 
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
          >
            View All
          </Link>
        </div>

        <div className="relative px-0 md:px-12 group/bs">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2}
            loop={bestSellers.length > 4}
            navigation={{ nextEl: ".bs-next", prevEl: ".bs-prev" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="!static overflow-visible"
          >
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  product={product}
                  onQuickView={(p) => setSelectedProduct(selectedProduct?.id === p.id ? null : p)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="bs-prev absolute left-0 md:-left-6 top-[40%] -translate-y-1/2 z-50 p-2 text-[#171717] flex items-center justify-center transition-transform hover:scale-125">
            <FiChevronLeft size={36} strokeWidth={1} />
          </button>
          
          <button className="bs-next absolute right-0 md:-right-6 top-[40%] -translate-y-1/2 z-50 p-2 text-[#171717] flex items-center justify-center transition-transform hover:scale-125">
            <FiChevronRight size={36} strokeWidth={1} />
          </button>
        </div>

        {/* ✅ TARGET FOR AUTO-SCROLL */}
        <div ref={quickViewRef} className="scroll-mt-24">
          <AnimatePresence mode="wait">
            {selectedProduct && (
              <QuickViewDrawer 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSlider;