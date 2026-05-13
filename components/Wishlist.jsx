// src/components/WishlistSidebar.jsx
import React, { useEffect } from "react";
import { FaHeart, FaShoppingCart, FaTrash, FaTimes } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const WishlistSidebar = () => {
  const { wishlist, toggleWishlist, isSidebarOpen, setIsSidebarOpen } =
    useWishlist();

  const { addToCart } = useCart();

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* ✅ Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0 p-4 border-b">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            My Wishlist
          </h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={18} />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 p-4 overflow-y-auto">
          {wishlist.length === 0 ? (
            <p className="mt-10 text-center text-gray-500">
              No items in wishlist.
            </p>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-3 p-2 mb-4 border rounded-lg shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="object-cover w-16 h-16 rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.product.name}</h3>
                  <p className="text-xs text-gray-500">{item.brand}</p>
                  <p className="text-sm text-gray-500">
                    PKR {item.product.price}
                  </p>

                  <div className="flex gap-2 mt-2">
                    {/* Add to Cart */}
                    <button
                      onClick={() => {
                        const source = item.source || "WishlistSidebar";
                        addToCart(item.product, item.brand, source);
                        toggleWishlist(item.product, item.brand, item.source);
                        setIsSidebarOpen(false);
                      }}
                      className="px-2 py-1 text-xs text-white bg-black rounded"
                      title="Add to cart"
                    >
                      <FaShoppingCart />
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        toggleWishlist(item.product, item.brand, item.source)
                      }
                      className="px-2 py-1 text-xs text-red-500 border border-red-500 rounded"
                      title="Remove"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 p-4 border-t bg-gray-50">
          <p className="mb-2 text-sm text-center text-gray-600">
            Want to explore more?
          </p>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="w-full py-2 text-sm font-medium text-white bg-black rounded hover:bg-blackShade"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default WishlistSidebar;
