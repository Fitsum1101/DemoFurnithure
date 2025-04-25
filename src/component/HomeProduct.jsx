// import image2 from "./images/Kruzo Chair.png";
// import image1 from "./images/nordic char.png";
// import image3 from "./images/Ergonomic chair.png";

// const listfor = [
//   {
//     id: 1,
//     name: "Kruzo Aero Chair",
//     image: image1,
//     price: 120.0,
//   },
//   {
//     id: 2,
//     name: "Nordic Chair",
//     image: image2,
//     price: 75.0,
//   },
//   {
//     id: 3,
//     name: "Ergonomic Chair",
//     image: image3,
//     price: 150.0,
//   },
// ];
// function HomeProduct() {
//   return (
//     <div className="w-[1100px] m-auto ">
//       <div className="  mt-10 grid gap-10 lg:grid-cols-4 sm:grid-cols-2 justify-items-center items-center  ">
//         <div className="space-y-6 ">
//           <h1 className="font-bold capitalize text-2xl">
//             crafted with excellent material.
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
//             assumenda nam nulla maxime, cum modi vel maiores, aspernatur quas
//             error hic quibusdam.
//           </p>
//           <button className="bg-yellow-400 text-black font-bold px-4 py-2   border rounded-3xl ">
//             Explore
//           </button>
//         </div>
//         {listfor.map((item) => (
//           <Item key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomeProduct;

// function Item({ item }) {
//   return (
//     <div className="place-items-center cursor-pointer flex flex-col font-bold py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out">
//       <img src={item.image} alt="Kruzo Chair" className="w-72 h-72 pb-8" />
//       <h1>{item.name}</h1>
//       <span>${item.price}</span>
//       <button className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black ">
//         Add
//       </button>
//     </div>
//   );
// }

import image2 from "./images/Kruzo Chair.png";
import image1 from "./images/nordic char.png";
import image3 from "./images/Ergonomic chair.png";

const listfor = [
  {
    id: 1,
    name: "Kruzo Aero Chair",
    image: image1,
    price: 120.0,
  },
  {
    id: 2,
    name: "Nordic Chair",
    image: image2,
    price: 75.0,
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    image: image3,
    price: 150.0,
  },
];

function HomeProduct() {
  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[1100px] m-auto">
      <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
        {/* Text section - always visible */}
        <div className="space-y-6 md:col-span-1 lg:col-span-1">
          <h1 className="font-bold capitalize text-2xl">
            crafted with excellent material.
          </h1>
          <p>
          At FURNI, every chair we craft tells a story of comfort, precision, and timeless elegance. From the living room to the home office, our seating is designed not just to look beautiful, but to feel right every time you sit down. Made with high-quality materials and stylish finishes.
          </p>
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 border rounded-3xl">
            Explore
          </button>
        </div>

        {/* Products - hidden on small screens, visible on md+ */}
        {listfor.map((item) => (
          <div key={item.id} className="hidden md:block">
            <Item item={item} />
          </div>
        ))}

        {/* Show only one product on small screens */}
        <div className="md:hidden">
          <Item item={listfor[0]} />
        </div>
      </div>
    </div>
  );
}

function Item({ item }) {
  return (
    <div className="place-items-center cursor-pointer flex flex-col font-bold py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out">
      <img
        src={item.image}
        alt={item.name}
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 pb-8"
      />
      <h1 className="text-center">{item.name}</h1>
      <span>${item.price}</span>
      <button className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black">
        Add
      </button>
    </div>
  );
}

export default HomeProduct;
