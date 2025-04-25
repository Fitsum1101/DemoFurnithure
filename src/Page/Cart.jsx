import { Outlet } from "react-router-dom";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <CartItem />
      <Footer />
    </div>
  );
}

export default Cart;
