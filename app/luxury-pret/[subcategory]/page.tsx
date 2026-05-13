import { products } from "../../../data/products";
import ProductGrid from "../../../components/QuickView/ProductGrid";
import { notFound } from "next/navigation";

export default async function LuxurySubCategory({ params }) {
  const { subcategory } = await params;

  const filtered = products.filter(
    (p) => 
      p.category.toLowerCase() === "luxury-pret" && 
      p.subcategory.toLowerCase() === subcategory.toLowerCase()
  );

  if (filtered.length === 0) notFound();

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-[10px] tracking-[0.3em] text-gray-400 mb-2 uppercase">Luxury Pret</p>
        <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase text-[#171717]">
          {subcategory.replace("-", " ")}
        </h1>
      </div>
      <ProductGrid products={filtered} />
    </main>
  );
}