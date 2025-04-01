import { FaCartShopping } from "react-icons/fa6";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div className="flex justify-around items-center bg-[#457b66] text-white fixed w-full z-10 opacity-95 p-4">
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
