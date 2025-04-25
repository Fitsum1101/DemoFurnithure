import { useDispatch } from "react-redux";
import { deleteItem } from "../Page/CartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(deleteItem(id))} type="small">
      Delete
    </button>
  );
}

export default DeleteItem;
