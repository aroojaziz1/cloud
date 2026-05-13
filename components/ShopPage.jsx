// src/components/ShopPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { products } from "../data/Shop";

const ShopPage = () => {
  const [quickView, setQuickView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = ["S", "M", "L"];

  /* ================= SCROLL TO TOP ON PAGE LOAD ================= */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================= SCROLL TO TOP WHEN PRODUCT OPENS ================= */
  useEffect(() => {
    if (selectedProduct) {
      window.scrollTo(0, 0);
    }
  }, [selectedProduct]);

  /* ================= LOCK BODY SCROLL WHEN MODAL OPEN ================= */
  useEffect(() => {
    if (quickView || selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [quickView, selectedProduct]);

  const previewImages = (product) => {
    if (!product) return [];
    let imgs = product.images?.slice(0, 3) || [product.image];
    while (imgs.length < 3) imgs.push(product.image);
    return imgs;
  };

  const closeAll = () => {
    setQuickView(null);
    setSelectedProduct(null);
    setActiveIndex(0);
    setSelectedSize(null);
    setSelectedColor(null);
    setQuantity(1);
  };

  const renderProductDetails = (product) => (
    <>
      {/* COLORS */}
      {product.colors?.length > 0 && (
        <div>
          <h3 className="text-sm font-bold mb-2">Color</h3>
          <div className="flex gap-3 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`border-2 min-w-[70px] h-10 px-2 text-sm bg-white rounded ${
                  selectedColor === color
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SIZE */}
      <div className="mt-4">
        <p className="text-sm font-bold mb-2">Size</p>
        <div className="flex gap-3">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`border-2 w-12 h-10 text-sm bg-white rounded ${
                selectedSize === s ? "border-black" : "border-gray-300"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* FABRIC DETAILS */}
      {product.fabricDetails && (
        <div className="mt-4">
          <p className="text-sm font-bold mb-2">Fabric Details</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {Object.entries(product.fabricDetails).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* DESCRIPTION */}
      {product.description && (
        <p className="text-sm text-gray-600 mt-4">
          <strong>Description:</strong> {product.description}
        </p>
      )}

      {/* NOTE */}
      {product.note && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>Note:</strong> {product.note}
        </p>
      )}

      {/* SHIPPING */}
      {product.shippingTime && (
        <p className="text-sm text-gray-600 mt-2">
          <strong>Shipping Time:</strong> {product.shippingTime}
        </p>
      )}
    </>
  );

  return (
    <>
      {/* ================= GRID ================= */}
      {!selectedProduct && (
        <>
          <div className="py-6 text-center">
            <h1 className="text-3xl tracking-wide">BRIDAL</h1>
          </div>

          <section className="px-[5%] pb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveIndex(0);
                        setSelectedSize(null);
                        setSelectedColor(null);
                      }}
                    />

                    {/* QUICK VIEW (DESKTOP ONLY) */}
                    <div className="absolute bottom-4 left-0 w-full px-4 opacity-0 md:group-hover:opacity-100 transition duration-300 hidden md:block">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickView(product);
                          setActiveIndex(0);
                          setQuantity(1);
                          setSelectedSize(null);
                          setSelectedColor(null);
                        }}
                        className="w-full bg-white text-black border border-black rounded py-2 text-sm"
                      >
                        QUICK VIEW
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-sm font-medium">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ================= PRODUCT PAGE ================= */}
      {selectedProduct && (
        <div className="relative px-[8%] py-20 grid md:grid-cols-2 gap-12 min-h-screen">
          <button
            onClick={closeAll}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <FaTimes size={18} />
          </button>

          <div>
            <img
              src={previewImages(selectedProduct)[activeIndex]}
              alt={selectedProduct.name}
              className="w-full max-h-[75vh] object-contain"
            />

            <div className="flex gap-4 mt-6">
              {previewImages(selectedProduct).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setActiveIndex(i)}
                  className={`w-24 h-32 object-cover cursor-pointer border ${
                    activeIndex === i
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-medium">
              {selectedProduct.name}
            </h2>
            <p className="text-xl font-semibold">
              {selectedProduct.price}
            </p>
            {renderProductDetails(selectedProduct)}
          </div>
        </div>
      )}

      {/* ================= QUICK VIEW MODAL ================= */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start overflow-y-auto"
            onClick={closeAll}
          >
            <div
              className="relative mt-24 w-full max-w-6xl rounded-lg shadow-lg p-6 bg-[rgb(247,241,240)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeAll}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <FaTimes size={18} />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={previewImages(quickView)[activeIndex]}
                    alt={quickView.name}
                    className="w-full max-h-[70vh] object-contain"
                  />

                  <div className="flex justify-center gap-4 mt-4">
                    {previewImages(quickView).map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        onClick={() => setActiveIndex(i)}
                        className={`w-24 h-32 object-cover cursor-pointer border ${
                          activeIndex === i
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-medium">
                    {quickView.name}
                  </h2>
                  <p className="text-lg font-semibold">
                    {quickView.price}
                  </p>
                  {renderProductDetails(quickView)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShopPage;