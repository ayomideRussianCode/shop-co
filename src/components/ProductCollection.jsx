import ProductsSection from "../components/ProductsSection";
import { newArrivalsData, topSellingData } from "../data/ProductsData";

export default function ProductCollection() {
  return (
    <div className="max-w-6xl mt-10 mx-auto px-4">
      <ProductsSection title="NEW ARRIVALS" products={newArrivalsData} />
      <hr className="pb-8"/>
      <ProductsSection title="TOP SELLING" products={topSellingData} />
    </div>
  );
}
