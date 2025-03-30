import image1 from "./images/Kruzo Chair.png";
import image2 from "./images/nordic char.png";
import image3 from "./images/Ergonomic chair.png";

function Product() {
  return (
    <div>
      <div className="px-28 mt-10 grid gap-10 grid-cols-4 justify-items-center items-center  ">
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
        <div className="place-items-center font-bold hover:scale-105 transition duration-300 ease-in-out ">
          <img src={image2} alt="Kruzo Chair" className="w-72 h-72 pb-8" />
          <h1>Nordic Chair</h1>
          <span>$75.00</span>
        </div>
        <div className="place-items-center font-bold hover:scale-105 transition duration-300 ease-in-out ">
          <img src={image1} alt="Ergonomic Chair" className="w-72 h-72 pb-8" />
          <h1>Kruzo Aero Chair</h1>
          <span>$120.00</span>
        </div>
        <div className="place-items-center font-bold hover:scale-105 transition duration-300 ease-in-out ">
          <img src={image3} alt=" Nordic Chair" className="w-72 h-72 pb-8" />
          <h1>Ergonomic Chair</h1>
          <span>$150.00</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
