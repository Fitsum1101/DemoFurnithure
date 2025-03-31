import { FaCar, FaDesktop, FaHandshake } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import whychoos from "./images/why-choose-us-img 1.jpg";

const whychoose = [
  {
    id: 1,
    title: "Quality Materials",
    desc: "We use only the finest materials to ensure durability and style that lasts.",
    image: <FaHandshake className="w-11 h-11" />,
  },
  {
    id: 2,
    title: "Expert Craftsmanship",
    desc: "Our skilled artisans pay attention to every detail, creating pieces that are both functional and beautiful.",
    image: <FaDesktop className="w-11 h-11" />,
  },
  {
    id: 3,
    title: "Timeless Design",
    desc: "Our designs are timeless and versatile, making them a perfect fit for any space.",
    image: <FaCar className="w-11 h-11" />,
  },
  {
    id: 4,
    title: "Sustainable Practices",
    desc: "We prioritize sustainability in our production process, using eco-friendly materials and methods.",
    image: <FaCheckCircle className="w-11 h-11" />,
  },
];

function WhyChooseUs() {
  return (
    <div className="w-[1100px] m-auto mt-9 ">
      <hr />
      <div className="grid grid-cols-3 gap-6 pt-6 items-center ">
        <div className="col-span-2">
          <h1 className="capitalize font-bold text-3xl ">Why choose us</h1>
          <p className="font-thin text-sm capitalize">
            at our design studio, we pride ourselves on using only the finest
            materials and
            <br />
            techniques. each piece of furniture is crafted with care, ensuring
            durability and style
            <br />
            that latest
          </p>
          <div>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              {whychoose.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img src={whychoos} alt="whychooseus" className="w-96  h-96" />
        </div>
      </div>
    </div>
  );
}
function Item({ item }) {
  return (
    <li className="space-y-2">
      <span>{item.image}</span>
      <h1 className="font-bold ">{item.title}</h1>
      <p>{item.desc}</p>
    </li>
  );
}
export default WhyChooseUs;
