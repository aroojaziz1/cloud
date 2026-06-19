import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "../../../components/ProductDetailClient";

// Force static engine behavior and disallow dynamic runtime fallbacks
export const dynamicParams = false;

// SEO Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Arooj Aziz Luxury Wear`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

// Hyper-Optimization: Build-Time Static Generation
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}