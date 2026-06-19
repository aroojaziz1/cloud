import { products } from "../../../data/products";
import ProductGrid from "../../../components/QuickView/ProductGrid";
import { notFound } from "next/navigation";

// Stop on-demand dynamic server processing for unrecognized routes
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ subcategory: string }>;
}

export default async function LuxurySubCategory({ params }: PageProps) {
  const { subcategory } = await params;

  const filtered = products.filter(
    (p) => 
      p.category.toLowerCase() === "luxury-pret" && 
      p.subcategory?.toLowerCase() === subcategory?.toLowerCase()
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

// Extract subcategories during the build phase
export async function generateStaticParams() {
  const subcategories = products
    .filter((p) => p.category.toLowerCase() === "luxury-pret" && p.subcategory)
    .map((p) => p.subcategory!.toLowerCase());

  // Remove duplicates
  const uniqueSubcategories = Array.from(new Set(subcategories));

  return uniqueSubcategories.map((sub) => ({
    subcategory: sub,
  }));
}