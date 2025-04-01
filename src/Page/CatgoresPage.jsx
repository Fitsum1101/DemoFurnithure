import { Outlet } from "react-router-dom";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";

function CatgoresPage() {
  return (
    <div>
      <NavBar />
      <div className="pt-16">catagori</div>
      <Footer />
      <Outlet />
    </div>
  );
}

export default CatgoresPage;
