import { products } from "../../data/products";
import ProductGrid from "../../components/QuickView/ProductGrid";

export default function FormalPage() {
  // 1. Filter for formal category
  const formalProducts = products.filter(
    (p) => p.category.toLowerCase() === "formal"
  );

  
  const sortedFormalProducts = [...formalProducts].sort((a, b) => b.id - a.id);

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-center mb-12 uppercase text-[#171717]">
        Formal Collection
      </h1>
      {/* Pass the newly sorted products list into the grid component */}
      <ProductGrid products={sortedFormalProducts} />
    </main>
  );
}