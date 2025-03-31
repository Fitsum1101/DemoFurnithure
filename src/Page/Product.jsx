import { Outlet } from "react-router-dom";
import ProductList from "../component/ProductList";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";
function Product() {
  return (
    <div>
      <NavBar />
      <ProductList />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Product;
