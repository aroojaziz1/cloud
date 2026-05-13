import { products } from "../../data/products";
import ProductGrid from "../../components/QuickView/ProductGrid";

export default function LuxuryPretPage() {
  const luxuryProducts = products.filter(
    (p) => p.category.toLowerCase() === "luxury-pret"
  );

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-center mb-12 uppercase text-[#171717]">
        Luxury Pret
      </h1>
      <ProductGrid products={luxuryProducts} />
    </main>
  );
}