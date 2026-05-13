'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "../data/Kurti.js";

const KurtiCollection = () => {
  const router = useRouter();

  const handleProductClick = (id) => {
    router.push(`/chahatcollection/kurti&trouser/suit/${id}`);
  };

  return (
    <>
      <div className="px-4 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl text-black font-semibold">
          Best Luxury Dresses - WANIA
        </h1>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-[5%]">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer group"
          >
            {/* Image container with relative positioning for fill */}
            <div className="overflow-hidden aspect-[4/5] relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 text-center space-y-1">
              <h3 className="text-base font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-sm font-medium text-black">{product.price}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default KurtiCollection;