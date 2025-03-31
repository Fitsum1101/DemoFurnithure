import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CatgoresPage from "./Page/CatgoresPage";
import Product from "./Page/Product";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import ScrollToTop from "./component/ScrollToTop";
import ProductDetail from "./component/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/catgores",
    element: <CatgoresPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  );
}

export default App;
