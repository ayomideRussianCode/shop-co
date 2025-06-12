import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";
import ProductsSection from "../components/ProductsSection";
import { products } from "../data/ProductsData";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import RatingReviewSection from "../components/RatingReviewSection";

function ProductDetailPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/" },
    { label: "Men", href: "/" },
    { label: "T-shirts", href: "/" },
  ];
  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumbs items={breadcrumbs} />
      <ProductDetail/>
      <RatingReviewSection/>
       <ProductsSection title="YOU MIGHT ALSO LIKE" products={products} />
      {/* <ProductCollection/> */}
      <Footer/>
    </>
  );
}
export default ProductDetailPage;
