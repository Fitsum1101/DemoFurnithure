import { Outlet } from "react-router-dom";
import HomeProduct from "../component/HomeProduct";
import NavBar from "../Ui/NavBar";
import Footer from "../component/Footer";
import HomeSlide from "../component/HomeSlide";
import WhyChooseUs from "../component/WhyChooseUs";
import WeHelp from "../component/WeHelp";
import "../component/TestMoni";
import TestMoni from "../component/TestMoni";
function Home() {
  return (
    <div>
      <NavBar />
      <HomeSlide />
      <HomeProduct />
      <WhyChooseUs />
      <WeHelp />
      <TestMoni />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
