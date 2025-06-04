import ProductsSection from "../components/ProductsSection";
import { newArrivalsData, topSellingData } from "../data/ProductsData";

export default function ProductCollection() {
  return (
    <div className=" mt-10 mx-auto">
      <ProductsSection title="NEW ARRIVALS" products={newArrivalsData} />
      <hr className="py-8 mx-8"/>
      <ProductsSection title="TOP SELLING" products={topSellingData} />
    </div>
  );
}
