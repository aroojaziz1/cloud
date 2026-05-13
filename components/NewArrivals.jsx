'use client';

import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../QuickView/ProductCard';
import QuickViewDrawer from '../QuickView/QuickViewDrawer';
import { AnimatePresence } from 'framer-motion';

const NewArrivals = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const velvetCollection = products
    .filter(p => p.isNewArrival === true)
    .slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl font-serif text-center uppercase tracking-[0.4em] mb-12">
          The Velvet Collection
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {velvetCollection.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <QuickViewDrawer
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default NewArrivals;