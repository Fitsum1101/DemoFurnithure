import { Link } from "react-router-dom";
import allProduct from "../Asset/allproduct";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cart";

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
    <div className="w-full px-4 pt-8 sm:px-6 md:max-w-[1100px] mx-auto">
      <div className="flex  justify-between items-center pt-12 sm:pt-24 mb-8 sm:mb-10 gap-4 sm:gap-0">
        <h1 className="font-extrabold sm:font-bold text-1xl sm:text-4xl">Our Products</h1>
        <div>
          <input
            className="border-2 rounded-lg px-4 focus:outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 w-full sm:w-60 py-2 text-sm"
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
  const dispatch = useDispatch();
  return (
    <li className="p-4 cursor-pointer rounded-3xl space-y-2 mx-10 sm:mx-0 md:mx-o hover:bg-slate-200 hover:scale-105 transition-all duration-300 ease-in-out hover:text-slate-600">
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
        <button
          onClick={() => dispatch(addItem(item))}
          className="bg-yellow-400 py-1 px-3 rounded-3xl mt-2 text-black font-bold hover:bg-yellow-500 w-full"
        >
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
