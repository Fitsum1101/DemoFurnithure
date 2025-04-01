// // import image2 from "./images/Kruzo Chair.png";
// // import image1 from "./images/nordic char.png";
// // import image3 from "./images/Ergonomic chair.png";
// // import image4 from "./images/sofa1.png";
// // import image5 from "./images/img-grid-2 1.jpg";
// // import image6 from "./images/img-grid-3 1.png";
// // import image7 from "./images/couch.png";
// // import image8 from "./images/bedpicture.png";
// import { Link } from "react-router-dom";
// import allProduct from "../Asset/allproduct";
// import { useState } from "react";
// // const allProduct = [
// //   {
// //     id: 1,
// //     name: "Kruzo Aero Chair",
// //     image: image1,
// //     price: 120.0,
// //     old_price: 150.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 2,
// //     name: "Nordic Chair",
// //     image: image2,
// //     price: 75.0,
// //     old_price: 100.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 3,
// //     name: "Ergonomic Chair",
// //     image: image3,
// //     price: 150.0,
// //     old_price: 200.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 4,
// //     name: "Sofa",
// //     image: image4,
// //     price: 200.0,
// //     old_price: 250.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 5,
// //     name: "Couch",
// //     image: image5,
// //     price: 300.0,
// //     old_price: 350.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 6,
// //     name: "Luxury Couch",
// //     image: image6,
// //     price: 400.0,
// //     old_price: 450.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 7,
// //     name: "Modern Couch",
// //     image: image7,
// //     price: 500.0,
// //     old_price: 550.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
// //   },
// //   {
// //     id: 8,
// //     name: "Luxury Bed",
// //     image: image8,
// //     price: 600.0,
// //     old_price: 650.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
// //   },
// //   {
// //     id: 9,
// //     name: "Luxury Bed",
// //     image: image2,
// //     price: 600.0,
// //     old_price: 650.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
// //   },
// //   {
// //     id: 10,
// //     name: "Luxury Bed",
// //     image: image7,
// //     price: 600.0,
// //     old_price: 650.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
// //   },
// //   {
// //     id: 11,
// //     name: "Luxury Bed",
// //     image: image6,
// //     price: 600.0,
// //     old_price: 650.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
// //   },
// //   {
// //     id: 12,
// //     name: "Luxury Bed",
// //     image: image5,
// //     price: 600.0,
// //     old_price: 650.0,
// //     describtion:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
// //   },
// // ];

// function ProductList() {
//   const [explaore, setExplaore] = useState(true);
//   function handleexplaore(e) {
//     e.preventDefault();
//     setExplaore(!explaore);
//   }
//   return (
//     <div className="w-[1100px] m-auto ">
//       <div className="flex justify-between items-center pt-24 mb-10 ">
//         <h1 className=" font-bold text-4xl">Our Product</h1>
//         <div>
//           <input
//             className="border-2 rounded-lg px-2  border-stone-300 w-60  placeholder:px-2 py-1 "
//             type="text"
//             placeholder="Serach by name ..."
//           />
//         </div>
//       </div>
//       <ul className="grid lg:grid-cols-4 sm:grid-cols-2 gap-7 ">
//         {allProduct.map((item) => (
//           <ManItem key={item.id} item={item} explaore={explaore} />
//         ))}
//       </ul>
//       <button
//         onClick={handleexplaore}
//         className="bg-yellow-400 flex justify-self-center py-3 px-10 text-xl rounded-3xl my-10 text-black font-bold"
//       >
//         {explaore ? "Explore More" : "See Less"}
//       </button>
//     </div>
//   );
// }

// function ManItem({ item, explaore }) {
//   if (explaore && item.id > 8) return null;
//   return (
//     <li className="p-4 cursor-pointer rounded-3xl space-y-2 bg-slate-200 hover:bg-slate-600  hover:scale-105 transition-all duration-300 ease-in-out  hover:text-white ">
//       <img className="pb-2 w-56 h-56 " src={item.image} alt="item" />
//       <h1 className="font-bold">{item.name}</h1>
//       <p className="font-thin">{item.describtion}</p>
//       <div className="font-bold">
//         <span className="pr-1">Price:</span>
//         <span className="pr-2">${item.price}</span>
//         <span className="text-stone-400 line-through">${item.old_price}</span>
//       </div>
//       <div className="flex justify-between">
//         <button className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black font-bold ">
//           ADD
//         </button>
//         <Link
//           to={`/product/${item.id}`}
//           className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black font-bold "
//         >
//           Detail
//         </Link>
//       </div>
//     </li>
//   );
// }
// export default ProductList;

import { Link } from "react-router-dom";
import allProduct from "../Asset/allproduct";
import { useState } from "react";

function ProductList() {
  const [explore, setExplore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  function handleExplore(e) {
    e.preventDefault();
    setExplore(!explore);
  }

  // Filter products based on search term
  const filteredProducts = allProduct.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine which products to show based on explore state
  const productsToShow = explore
    ? filteredProducts.slice(0, 8)
    : filteredProducts;

  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[1100px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center pt-12 sm:pt-24 mb-8 sm:mb-10 gap-4 sm:gap-0">
        <h1 className="font-bold text-3xl sm:text-4xl">Our Products</h1>
        <div>
          <input
            className="border-2 rounded-lg px-4 border-stone-300 w-full sm:w-60 py-2 text-sm"
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {productsToShow.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg">No products found matching your search.</p>
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {productsToShow.map((item) => (
              <ManItem key={item.id} item={item} />
            ))}
          </ul>

          {filteredProducts.length > 8 && (
            <div className="flex justify-center mt-8 sm:mt-10">
              <button
                onClick={handleExplore}
                className="bg-yellow-400 py-2 px-8 sm:py-3 sm:px-10 text-lg sm:text-xl rounded-3xl text-black font-bold hover:bg-yellow-500 transition-colors"
              >
                {explore ? "Explore More" : "See Less"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ManItem({ item }) {
  return (
    <li className="p-4 cursor-pointer rounded-3xl space-y-2 bg-slate-200 hover:bg-slate-600 hover:scale-105 transition-all duration-300 ease-in-out hover:text-white">
      <div className="flex justify-center">
        <img
          className="w-full max-w-[200px] h-auto aspect-square object-contain"
          src={item.image}
          alt={item.name}
        />
      </div>
      <h1 className="font-bold text-lg">{item.name}</h1>
      <p className="font-thin text-sm">{item.describtion}</p>
      <div className="font-bold">
        <span className="pr-1">Price:</span>
        <span className="pr-2">${item.price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </div>
      <div className="flex justify-between gap-2">
        <button className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black font-bold hover:bg-yellow-500 w-full">
          ADD
        </button>
        <Link
          to={`/product/${item.id}`}
          className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black font-bold hover:bg-yellow-500 w-full text-center"
        >
          Detail
        </Link>
      </div>
    </li>
  );
}

export default ProductList;
