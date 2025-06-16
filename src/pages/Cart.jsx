import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Breadcrumbs from "../components/Breadcrumbs";
import CartSection from "../components/CartSection";
import {CartData} from "../data/CartData"; 
import Footer from "../components/Footer";

function Cart() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/" },
  ];
  return (
    <>
      <TopBar />
      <NavBar />
      <Breadcrumbs items={breadcrumbs} />
      <CartSection products={CartData}/>
      <Footer />
    </>
  );
}

export default Cart;
