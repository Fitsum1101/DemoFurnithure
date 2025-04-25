import HomeProduct from "../component/HomeProduct";
import HomeSlide from "../component/HomeSlide";
import WhyChooseUs from "../component/WhyChooseUs";
import WeHelp from "../component/WeHelp";
import "../component/TestMoni";
import TestMoni from "../component/TestMoni";
function Home() {
  return (
    <div>
      <HomeSlide />
      <HomeProduct />
      <WhyChooseUs />
      <WeHelp />
      <TestMoni />
    </div>
  );
}

export default Home;
