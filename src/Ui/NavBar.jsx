// import { FaCartShopping } from "react-icons/fa6";
// import Logo from "./Logo";
// import { Link } from "react-router-dom";
// function NavBar() {
//   return (
//     <div>
//       <div className="flex justify-around items-center bg-[#457b66] text-white fixed w-full z-10 opacity-95 p-4">
//         <Logo />
//         <div>
//           <ul className="flex space-x-10 items-center">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/product">Product</Link>
//             </li>
//             <li>
//               <Link to="/catgores">Catgores</Link>
//             </li>
//             <li>
//               <Link to="/cart">
//                 <FaCartShopping className="w-8 h-8" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavBar;

import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[1262] m-auto">
      <div className="flex lg:px-24  justify-between items-center bg-[#457b66] text-white fixed w-full z-10 opacity-95 p-4 md:py-4">
        <Link to="/" className="text-2xl font-bold md:mr-auto">
          FURNI.
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`fixed top-16 left-0 h-full w-1/2 bg-[#457b66] text-white z-20 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:transform-none md:flex md:items-center md:justify-center md:space-x-10 md:bg-transparent md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 items-start md:items-center p-4 md:p-0">
            <li className="py-2 md:py-0">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/product">Product</Link>
            </li>
            <li className="py-2 md:py-0">
              <Link to="/catgores">Catgores</Link>
            </li>
            <li>
              <div className="flex relative items-center">
                <input
                  type="text"
                  placeholder="search here ..."
                  className="border-2 text-black rounded-lg px-4 border-stone-300 w-full sm:w-60 py-2 text-sm"
                />
                <button>
                  <FaSearch className="w-7 h-7 rounded-md text-stone-500 absolute right-1 top-2 " />
                </button>
              </div>
            </li>
            <li className="py-2 md:py-0">
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
