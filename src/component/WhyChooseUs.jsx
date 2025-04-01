// import { FaCar, FaDesktop, FaHandshake } from "react-icons/fa6";
// import { FaCheckCircle } from "react-icons/fa";
// import whychoos from "./images/why-choose-us-img 1.jpg";

// const whychoose = [
//   {
//     id: 1,
//     title: "Quality Materials",
//     desc: "We use only the finest materials to ensure durability and style that lasts.",
//     image: <FaHandshake className="w-11 h-11" />,
//   },
//   {
//     id: 2,
//     title: "Expert Craftsmanship",
//     desc: "Our skilled artisans pay attention to every detail, creating pieces that are both functional and beautiful.",
//     image: <FaDesktop className="w-11 h-11" />,
//   },
//   {
//     id: 3,
//     title: "Timeless Design",
//     desc: "Our designs are timeless and versatile, making them a perfect fit for any space.",
//     image: <FaCar className="w-11 h-11" />,
//   },
//   {
//     id: 4,
//     title: "Sustainable Practices",
//     desc: "We prioritize sustainability in our production process, using eco-friendly materials and methods.",
//     image: <FaCheckCircle className="w-11 h-11" />,
//   },
// ];

// function WhyChooseUs() {
//   return (
//     <div className="w-[1100px] m-auto mt-9 ">
//       <hr />
//       <div className="grid grid-cols-3 gap-6 pt-6 items-center ">
//         <div className="col-span-2">
//           <h1 className="capitalize font-bold text-3xl ">Why choose us</h1>
//           <p className="font-thin text-sm capitalize">
//             at our design studio, we pride ourselves on using only the finest
//             materials and
//             <br />
//             techniques. each piece of furniture is crafted with care, ensuring
//             durability and style
//             <br />
//             that latest
//           </p>
//           <div>
//             <ul className="grid grid-cols-2 gap-4 mt-4">
//               {whychoose.map((item) => (
//                 <Item key={item.id} item={item} />
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div>
//           <img src={whychoos} alt="whychooseus" className="w-96  h-96" />
//         </div>
//       </div>
//     </div>
//   );
// }
// function Item({ item }) {
//   return (
//     <li className="space-y-2">
//       <span>{item.image}</span>
//       <h1 className="font-bold ">{item.title}</h1>
//       <p>{item.desc}</p>
//     </li>
//   );
// }
// export default WhyChooseUs;

import { FaCar, FaDesktop, FaHandshake } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import whychoos from "./images/why-choose-us-img 1.jpg";

const whychoose = [
  {
    id: 1,
    title: "Quality Materials",
    desc: "We use only the finest materials to ensure durability and style that lasts.",
    image: <FaHandshake className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    id: 2,
    title: "Expert Craftsmanship",
    desc: "Our skilled artisans pay attention to every detail, creating pieces that are both functional and beautiful.",
    image: <FaDesktop className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    id: 3,
    title: "Timeless Design",
    desc: "Our designs are timeless and versatile, making them a perfect fit for any space.",
    image: <FaCar className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
  {
    id: 4,
    title: "Sustainable Practices",
    desc: "We prioritize sustainability in our production process, using eco-friendly materials and methods.",
    image: <FaCheckCircle className="w-8 h-8 sm:w-11 sm:h-11" />,
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[1100px] mx-auto mt-9">
      <hr className="mx-auto w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {/* Text content - centered on mobile, left-aligned on md+ */}
        <div className="md:col-span-2 text-center sm:text-left">
          <h1 className="capitalize font-bold text-2xl md:text-3xl">
            Why choose us
          </h1>
          <p className="font-thin text-sm capitalize mt-2 mx-auto sm:mx-0 max-w-[500px] sm:max-w-none">
            At our design studio, we pride ourselves on using only the finest
            materials and techniques. Each piece of furniture is crafted with
            care, ensuring durability and style that lasts.
          </p>
          <div className="mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center sm:justify-items-start">
              {whychoose.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Image - hidden on mobile, visible on md+ */}
        <div className="hidden md:flex justify-center items-start">
          <img
            src={whychoos}
            alt="why choose us"
            className="w-full max-w-[384px] h-auto aspect-square object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="space-y-2 p-3 md:p-0 text-center sm:text-left max-w-xs sm:max-w-none">
      <span className="text-[#457b66] block mx-auto sm:mx-0">{item.image}</span>
      <h1 className="font-bold text-lg">{item.title}</h1>
      <p className="text-gray-600 text-sm">{item.desc}</p>
    </li>
  );
}

export default WhyChooseUs;
