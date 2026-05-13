"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

const QuickViewDrawer = ({ product, onClose }) => {
  const router = useRouter();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!product) return null;

  const nextImg = () => setActiveImgIndex((prev) => (prev + 1) % product.images.length);
  const prevImg = () => setActiveImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full overflow-hidden bg-white border-t border-b border-gray-100"
    >
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-16 relative">
        <button onClick={onClose} className="absolute right-6 top-6 text-xl text-gray-400 hover:text-black transition z-50">✕</button>

        {/* LEFT: Image Gallery */}
        <div className="flex flex-col space-y-4">
          <div className="relative w-full aspect-[3/4] bg-[#f9f9f9] group flex items-center justify-center overflow-hidden">
            <Image 
              src={product.images[activeImgIndex]} 
              alt={product.name} 
              fill 
              className="object-cover transition-all duration-500" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <button onClick={prevImg} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 hover:bg-white/70 transition-colors z-10"><FiChevronLeft size={20} /></button>
            <button onClick={nextImg} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 hover:bg-white/70 transition-colors z-10"><FiChevronRight size={20} /></button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar justify-center">
            {product.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImgIndex(idx)} className={`relative w-16 h-20 flex-shrink-0 border transition-all ${activeImgIndex === idx ? "border-black opacity-100" : "border-transparent opacity-60"}`}>
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex flex-col text-left space-y-6">
          <h2 className="text-[26px] font-serif text-[#171717] normal-case tracking-normal">{product.name}</h2>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] mb-3 text-[#171717]">Color</p>
            <div className="border border-gray-200 px-5 py-2 text-[13px] w-fit bg-white text-[#707173] uppercase">{product.colors?.[0] || "Original"}</div>
          </div>
          <button onClick={() => { onClose(); router.push(`/product/${product.slug}`); }} className="text-[11px] text-[#707173] tracking-[0.15em] hover:text-black uppercase mt-4 text-left border-b border-[#707173] w-fit pb-1">
            Full Product Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickViewDrawer;