'use client';


import Link from "next/link";
import Hero from "../components/Hero";
import Category from "../components/Category";
import TextImage from "../components/TextImage";
import VideoSection from "../components/VideoSection";
import ProductGrid from "../components/QuickView/ProductGrid";
import { products } from "../data/products"; 
import BestSellersSlider from "../components/BestSellers/BestSellersSlider";

export default function Home() {
  const bestSellers = products.filter((p) => p.isBestSeller === true).slice(0, 8);
  const velvetProducts = products.filter((p) => p.subcategory?.toLowerCase() === "velvet");

  return (
    <>
      <Hero />
      <Category />

      <BestSellersSlider />

      <TextImage />

      {/* VELVET COLLECTION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-[24px] font-serif font-normal text-[#171717] mb-2 uppercase tracking-widest">
              The Velvet Collection
            </h2>
            <Link 
              href="/formal" 
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C16452] underline underline-offset-[6px] decoration-[1px] hover:opacity-80 transition-opacity"
            >
              View All
            </Link>
          </div>
          
          {/* ✅ CRITICAL FIX: Explicitly set layout="slider" here */}
          <ProductGrid products={velvetProducts} layout="slider" />
        </div>
      </section>

      <VideoSection />
    </>
  );
}