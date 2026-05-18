'use client';

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ✅ Updated links to match your folder structure: /bridals, /luxury-pret, /formal
const categories = [
  { img: "/assets/bridal.jpg", title: "Bridals", link: "/bridals" },
  { img: "/assets/pret.jpg", title: "Luxury Pret", link: "/luxury-pret" },
  { img: "/assets/formal.jpg", title: "Formal", link: "/formal" },
];

const Category = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <div className="relative group/main">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-4 no-scrollbar snap-x snap-mandatory"
          >
            {categories.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className="relative group min-w-full sm:min-w-0 h-[550px] md:h-[550px] overflow-hidden flex-shrink-0 snap-center"
              >
                {/* ✅ Optimized Next.js Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  // Priority added to first image for better LCP (Speed)
                  priority={i === 0} 
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="absolute inset-0 object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Bottom Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-80" />

                {/* Category Button */}
                <div className="absolute inset-x-0 bottom-16 sm:bottom-10 flex justify-center">
                  <span className="px-8 py-3 border border-white text-white text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    {item.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Slider dots (mobile only) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 sm:hidden pointer-events-none">
            {categories.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full border border-white transition-all duration-300 ${
                  activeIndex === i ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Category;