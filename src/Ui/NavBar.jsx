import { FaCartShopping } from "react-icons/fa6";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div className="flex justify-around items-center bg-gray-800 text-white p-4">
        <Logo />
        <div>
          <ul className="flex space-x-10 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/catgores">Catgores</Link>
            </li>
            <li>
              <Link to="/cart">
                <FaCartShopping className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
