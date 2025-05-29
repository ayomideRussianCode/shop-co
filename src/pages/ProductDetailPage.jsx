import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";
// import ProductCollection from '../components/ProductCollection';
import CustomersTestimonials from "../components/CustomersTestimonial";
// import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

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
      <CustomersTestimonials/>
      {/* <ProductCollection/> */}
      {/* <Footer/> */}
    </>
  );
}
export default ProductDetailPage;
