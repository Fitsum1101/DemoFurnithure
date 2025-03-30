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
    <div className=" ">
      <div className=" px-28 mt-10 grid gap-10 lg:grid-cols-4 sm:grid-cols-2 justify-items-center items-center  ">
        <div className="space-y-6 ">
          <h1 className="font-bold capitalize text-2xl">
            crafted with excellent material.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            assumenda nam nulla maxime, cum modi vel maiores, aspernatur quas
            error hic quibusdam.
          </p>
          <button className="bg-slate-800 text-white px-4 py-2   border rounded-3xl ">
            Explore
          </button>
        </div>
        {listfor.map((item) => (
          <Item key={item.id} item={item} />
        ))}

        {/* <div className="place-items-center flex flex-col font-bold py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src={image2} alt="Kruzo Chair" className="w-72 h-72 pb-8" />
          <h1>Nordic Chair</h1>
          <span>$75.00</span>
          <button className="bg-black py-1 px-3 rounded-3xl mt-2 text-white ">
            Add
          </button>
        </div> */}

        {/* <div className="place-items-center font-bold  py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 flex flex-col transition-all duration-300 ease-in-out">
          <img src={image1} alt="Ergonomic Chair" className="w-72 h-72 pb-8" />
          <h1>Kruzo Aero Chair</h1>
          <span>$120.00</span>
          <button className="bg-black py-1 px-3 rounded-3xl mt-2 text-white ">
            Add
          </button>
        </div>
        <div className="place-items-center font-bold py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 flex flex-col transition-all duration-300 ease-in-out">
          <img src={image3} alt=" Nordic Chair" className="w-72 h-72 pb-8" />
          <h1>Ergonomic Chair</h1>
          <span>$150.00</span>
          <button className="bg-black py-1 px-3 rounded-3xl mt-2 text-white ">
            Add
          </button>
        </div>  */}
      </div>
    </div>
  );
}

export default HomeProduct;

function Item({ item }) {
  return (
    <div className="place-items-center flex flex-col font-bold py-5 hover:bg-slate-200 rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out">
      <img src={item.image} alt="Kruzo Chair" className="w-72 h-72 pb-8" />
      <h1>{item.name}</h1>
      <span>${item.price}</span>
      <button className="bg-black py-1 px-3 rounded-3xl mt-2 text-white ">
        Add
      </button>
    </div>
  );
}
