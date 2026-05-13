import { products } from "../../data/products";
import ProductGrid from "../../components/QuickView/ProductGrid";

export default function BestSellersPage() {
  // Filter master data for best sellers
  const bestSellerProducts = products.filter(
    (p) => p.isBestSeller === true
  );

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16 mt-10">
        <h1 className="text-2xl md:text-4xl font-serif tracking-[0.3em] uppercase text-[#171717]">
          Best Sellers
        </h1>
        <div className="w-12 h-[1px] bg-[#C16452] mx-auto mt-4 mb-4"></div>
      </div>

      {/* Grid Section */}
      <div className="min-h-[60vh]">
        {bestSellerProducts.length > 0 ? (
          <ProductGrid products={bestSellerProducts} layout="grid" />
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 tracking-widest uppercase text-xs">No best sellers found.</p>
          </div>
        )}
      </div>
    </main>
  );
}