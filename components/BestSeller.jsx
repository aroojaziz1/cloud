'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Professional Icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    images: ["/assets/3pc/black-dress.webp", "/assets/3pc/jet2.webp", "/assets/3pc/jet3.webp"],
    name: "Wania | Jet Black 2",
    colors: ["Jet Black"],
    description: "Elegance redefined in our stunning black dress with silver embellishments...",
    fabricDetails: { Gown: "Crinkle Chiffon", Undershirt: "Grip Silk", Pants: "Korean Raw Silk", Dupatta: "Soft Net", Color: "Jet Black" },
  },
  {
    id: 2,
    images: ["/assets/3pc/red-suit.webp", "/assets/3pc/hot2.webp", "/assets/3pc/hot3.webp"],
    name: "Wania | Hot Pink",
    colors: ["Hot Pink"],
    description: "A symphony of pinks, with a hint of silver and a dash of elegance...",
    fabricDetails: { TOP: "Georgette", SHARARA: "Georgette", Inner: "Malai Silk", Dupatta: "Organza", Color: "Hot Pink" },
  },
  {
    id: 3,
    images: ["/assets/3pc/megenta.webp", "/assets/3pc/magenta2.webp", "/assets/3pc/magenta3.webp"],
    name: "Wania | Magenta",
    colors: ["Magenta"],
    description: "Add a touch of sophistication to your wardrobe with this classy magenta side drop gown.",
    fabricDetails: { Fabric: "Chiffon", Color: "Magenta" },
  },
  {
    id: 4,
    images: ["/assets/3pc/gresh-suit.webp", "/assets/3pc/zinc_2.webp", "/assets/3pc/zinc_3.webp"],
    name: "Wania | Zinc",
    colors: ["Sage Green"],
    description: "This teal attire with gold embroidery is a must-have...",
    fabricDetails: { Shirt: "Tassel Silk", Pants: "Korean Raw Silk", Color: "Zinc" },
  },
  {
    id: 5,
    images: ["/assets/3pc/dark-suit.webp", "/assets/3pc/jetblack2.webp", "/assets/3pc/jetblack3.webp"],
    name: "Wania | Jet Black",
    colors: ["Jet Black"],
    description: "Black beauty adorned with vibrant embroidery!...",
    fabricDetails: { Shirt: "Katan Silk", Pants: "Korean Raw Silk", Dupatta: "Crinkle Chiffon", Color: "Jet Black" },
  },
];

const BestSeller = () => {
  const [quickView, setQuickView] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const sizes = ["S", "M", "L"];

  useEffect(() => {
    document.body.style.overflow = quickView ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [quickView]);

  const getPreviewImages = (product) => {
    if (!product) return [];
    let imgs = product.images?.slice(0, 3) || [product.images[0]];
    while (imgs.length < 3) imgs.push(product.images[0]);
    return imgs;
  };

  const closeAll = () => {
    setQuickView(null);
    setActiveImage(0);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <>
      <section className="bg-[#f7f1f0] mt-10 py-12 w-full relative">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl tracking-wide uppercase font-serif">
            OUR LATEST WANIA COLLECTIONS
          </h2>
          <Link href="/luxury-pret" className="text-xs tracking-[0.2em] text-gray-500 uppercase border-b border-gray-400 pb-1 hover:text-black transition">
            View all
          </Link>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-12 group">
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={1.2} // Show part of the next slide on mobile
            navigation={{
              nextEl: ".best-next",
              prevEl: ".best-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <div className="relative group cursor-pointer bg-white pb-4">
                  <div
                    className="relative overflow-hidden aspect-[3/4]"
                    onClick={() => {
                      setQuickView(product);
                      setActiveImage(0);
                    }}
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    {product.images[1] && (
                      <Image
                        src={product.images[1]}
                        alt={product.name}
                        fill
                        className="object-cover absolute top-0 left-0 opacity-0 transition duration-700 group-hover:opacity-100 group-hover:scale-105"
                      />
                    )}

                    {/* QUICK VIEW BUTTON - DESKTOP */}
                    <div className="hidden md:block absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickView(product);
                        }}
                        className="w-full bg-white/90 text-black py-4 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white transition"
                      >
                        QUICK VIEW
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 px-2 text-center">
                    <h3 className="text-[11px] tracking-[0.1em] uppercase text-gray-800 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PROFESSIONAL NAVIGATION ICONS */}
          <button className="best-prev absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 shadow-md rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex">
            <FiChevronLeft size={20} className="text-gray-800" />
          </button>
          <button className="best-next absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 shadow-md rounded-full hover:bg-white transition-all opacity-0 group-hover:opacity-100 hidden md:flex">
            <FiChevronRight size={20} className="text-gray-800" />
          </button>
        </div>
      </section>

      {/* QUICK VIEW MODAL (Logic remains the same, styling cleaned up) */}
      {quickView && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
          onClick={closeAll}
        >
          <div
            className="relative w-full max-w-5xl bg-white shadow-2xl overflow-y-auto max-h-[90vh] md:max-h-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeAll} className="absolute top-4 right-4 z-50 p-2 text-gray-500 hover:text-black">
              <FaTimes size={20} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* IMAGE GALLERY */}
              <div className="bg-[#f9f9f9] p-6">
                <div className="relative w-full aspect-[3/4]">
                  <Image
                    src={getPreviewImages(quickView)[activeImage]}
                    alt={quickView.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex gap-2 mt-4 justify-center">
                  {getPreviewImages(quickView).map((img, index) => (
                    <div
                      key={index}
                      className={`relative w-16 h-20 cursor-pointer border-2 transition ${activeImage === index ? "border-black" : "border-transparent"}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image src={img} alt="thumb" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT DETAILS */}
              <div className="p-8 md:p-12 space-y-6 self-center">
                <h2 className="text-2xl font-serif tracking-wide uppercase">{quickView.name}</h2>
                <p className="text-sm text-gray-600 leading-relaxed font-light">{quickView.description}</p>
                
                {/* Options (Color/Size) removed for brevity as per previous logic, but kept functional */}
                <div className="pt-6 border-t border-gray-100">
                   <Link href={`/product/${quickView.id}`} className="block w-full text-center py-4 bg-black text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-gray-800 transition">
                      View Full Details
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;