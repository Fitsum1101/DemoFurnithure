import image2 from "./images/Kruzo Chair.png";
import image1 from "./images/nordic char.png";
import image3 from "./images/Ergonomic chair.png";
import image4 from "./images/sofa1.png";
import image5 from "./images/img-grid-2 1.jpg";
import image6 from "./images/img-grid-3 1.png";
import image7 from "./images/couch.png";
import image8 from "./images/bedpicture.png";
const allProduct = [
  {
    id: 1,
    name: "Kruzo Aero Chair",
    image: image1,
    price: 120.0,
    old_price: 150.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 2,
    name: "Nordic Chair",
    image: image2,
    price: 75.0,
    old_price: 100.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 3,
    name: "Ergonomic Chair",
    image: image3,
    price: 150.0,
    old_price: 200.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 4,
    name: "Sofa",
    image: image4,
    price: 200.0,
    old_price: 250.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 5,
    name: "Couch",
    image: image5,
    price: 300.0,
    old_price: 350.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 6,
    name: "Luxury Couch",
    image: image6,
    price: 400.0,
    old_price: 450.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 7,
    name: "Modern Couch",
    image: image7,
    price: 500.0,
    old_price: 550.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla maxime.",
  },
  {
    id: 8,
    name: "Luxury Bed",
    image: image8,
    price: 600.0,
    old_price: 650.0,
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda nam nulla.",
  },
];

function ProductList() {
  return (
    <div>
      <ul className="grid grid-cols-4 gap-9 mx-16">
        {allProduct.map((item) => (
          <ManItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ManItem({ item }) {
  return (
    <div className="p-4 rounded-3xl space-y-2 bg-slate-200 hover:bg-slate-600  hover:scale-105 transition-all duration-300 ease-in-out  hover:text-white ">
      <img className="pb-2 w-56 h-56 " src={item.image} alt="item" />
      <h1 className="font-bold">{item.name}</h1>
      <p className="font-thin">{item.describtion}</p>
      <div>
        <span className="pr-2">${item.price}</span>
        <span className="text-stone-400 line-through">${item.old_price}</span>
      </div>
      <button className="bg-black py-1 px-3 rounded-3xl mt-2 text-white ">
        Add
      </button>
    </div>
  );
}
export default ProductList;
