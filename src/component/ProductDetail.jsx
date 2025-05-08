import star_icon from "./images/star_icon.png";
import dual_star_icon from "./images/star_dull_icon.png";
import allProduct from "../Asset/allproduct";
import { addItem } from "../store/cart";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
function ProductDetail() {
  const { id } = useParams();
  const item = allProduct.find((item) => item.id === Number(id));
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" mx-28 py-10 pt-24 ">
        <div className="grid sm:grid-cols-2 gap-10">
          <div className="flex  p-4">
            <div className="flex flex-col gap-4 ">
              <img
                src={item.image}
                className=" w-[130px] border-2 rounded-full p-2 border-yellow-300 "
                alt="choosen"
              />
              <img
                src={item.image}
                className=" w-[130px] border-2 p-2 rounded-full  border-yellow-300 "
                alt="choosen"
              />
              <img
                src={item.image}
                className=" w-[130px] border-2 p-2 rounded-full  border-yellow-300"
                alt="choosen"
              />
              <img
                src={item.image}
                className=" w-[130px] border-2 p-2 rounded-full  border-yellow-300"
                alt="choosen"
              />
            </div>
            <div>
              <img src={item.image} className="w-[586px]" alt="choosen" />
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-2xl ">{item.name}</h1>
            <div className="flex">
              <img src={star_icon} alt="stars" />
              <img src={star_icon} alt="stars" />
              <img src={star_icon} alt="stars" />
              <img src={star_icon} alt="stars" />
              <img src={dual_star_icon} alt="stars" />
              <p>(3.2)</p>
            </div>
            <div className="space-x-2">
              <span className="text-stone-400 line-through ">
                ${item.old_price}
              </span>
              <span className="font-bold">${item.price}</span>
              <span className="text-red-500">(-20%)</span>
            </div>
            <div>
              <p>{item.describtion}</p>
            </div>
            <h1 className="font-bold text-xl">Pick Color:</h1>
            <div className="space-x-3">
              <button className="border rounded-full border-yellow-300 p-4 bg-yellow-300"></button>
              <button className="border rounded-full border-red-500 p-4 bg-red-500"></button>
              <button className="border rounded-full border-green-500 p-4 bg-green-500"></button>
              <button className="border rounded-full border-black p-4 bg-black"></button>
            </div>
            <div>
              <div className="mt-8">
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="bg-yellow-400 text-black font-bold px-4 py-2   border rounded-3xl"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
