import { Route, Routes } from "react-router-dom";
import Product from "./Page/Product";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import RootLayoute from "./component/Layout/Root";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayoute />}>
          <Route index="true" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
