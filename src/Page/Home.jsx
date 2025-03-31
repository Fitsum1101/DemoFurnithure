import { Outlet } from "react-router-dom";
import HomeProduct from "../component/HomeProduct";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";
import HomeSlide from "../component/HomeSlide";
import WhyChooseUs from "../component/WhyChooseUs";
function Home() {
  return (
    <div>
      <NavBar />
      <HomeSlide />
      <HomeProduct />
      <WhyChooseUs />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
