import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../component/EmptyCart";
import { getCart, getCurrentQuantityById, clearCart } from "../Page/CartSlice";
import UpdateCart from "../component/UpdateCart";
import DeleteItem from "../component/DeleteItem";
function CartItem() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="py-4 mt-16 px-3">
      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>
      <ul className="divide-y divide-stone-300 border-b mt-3">
        {cart.map((item) => (
          <Cartobj key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <button to="/order/new" type="primary">
          Order{" "}
        </button>
        <button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default CartItem;

function Cartobj({ item }) {
  const { id, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="font-bold text-sm">${totalPrice}</p>
        <UpdateCart id={id} currentQuantity={currentQuantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}
