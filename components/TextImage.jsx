'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TextImage = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
          
          {/* IMAGE COLLAGE */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex items-center w-full md:w-[55%]"
          >
            {/* Left Image */}
            <div className="relative w-[55%] aspect-[3/4] z-0 -mt-10">
              <Image
                src="/assets/shop/Orish.webp"
                alt="FS Style Back"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
            {/* Right Image (overlapping) */}
            <div className="relative w-[55%] aspect-[3/4] z-10 -ml-[5%] mt-10 shadow-sm">
              <Image
                src="/assets/shop/navyblue.webp"
                alt="FS Style Front"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-center text-center w-full md:w-[45%]"
          >
            <h2 
              className="text-2xl md:text-3xl font-medium tracking-normal text-gray-900 mb-8 uppercase" 
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Luxury Pret
            </h2>
            <div className="pt-2">
              <Link href="/luxury-pret" className="group">
                <button className="px-12 py-3 border border-black text-black text-[10px] tracking-[0.2em] uppercase font-normal transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TextImage;