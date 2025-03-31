import { Outlet } from "react-router-dom";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";

function CatgoresPage() {
  return (
    <div>
      <NavBar />
      catagori
      <Footer />
      <Outlet />
    </div>
  );
}

export default CatgoresPage;
