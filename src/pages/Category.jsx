import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import ProductCategory from "../components/ProductCategory";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

function Category() {
    const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Casual", href: "/" },
  ];
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Breadcrumbs className="hidden sm:block" items={breadcrumbs}/>
    <ProductCategory/>
    <Footer/>
    </>
  )
}

export default Category