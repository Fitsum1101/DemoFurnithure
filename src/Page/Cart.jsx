import { Outlet } from "react-router-dom";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";

function Cart() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <h1>item sell</h1>
      <Footer />
    </div>
  );
}

export default Cart;
