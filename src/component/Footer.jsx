import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footerimg from "./images/sofa1.png";
function Footer() {
  return (
    <div className="w-[1100px] m-auto ">
      <hr className="my-4" />
      <div className="  flex justify-between items-center">
        <div className="col-span-2">
          <div className="flex items-center space-x-1">
            <FaEnvelope className="text-gray-400" />
            <h1 className="font-semibold pl-2">Subscribe to Newsletter</h1>
          </div>
          <div className="space-x-3 mt-2 flex items-center">
            <input
              type="text"
              placeholder="Enter your name"
              className="border rounded-lg px-2  border-[#C4C4C4] w-60  placeholder:px-2 
              placeholder-slate-800 [&::placeholder]:text-[.9rem] py-[6px] "
            />
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="border rounded-lg px-2  border-[#C4C4C4] w-60  placeholder:px-2 placeholder-slate-800 [&::placeholder]:text-[.9rem] py-[6px] "
            />
            <span>
              <FaTelegram className="w-10 cursor-pointer text-[#35736E] h-10" />
            </span>
          </div>
        </div>
        <div className="basis-[25rem]">
          <img className="w-full" src={footerimg} alt="footer" />
        </div>
      </div>
      <h1 className="font-bold text-3xl mb-6">Furni.</h1>
      <div className="grid grid-cols-6 text-[#989898] align-top  place-items-center my-4">
        <div className="col-span-2 space-y-10">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quis
            nobis odio, recusandae cupiditate earum amet odit maiores aliquid
            quas! Eum exercitationem possimus quod cupiditate sunt et nobis
            eligendi ex.
          </p>
        </div>
        <ul className=" flex gap-[.4]  flex-col">
          <li>
            <Link className="hover:text-[#333] duration-150" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Collections</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Sale</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">About Us</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Contact</Link>
          </li>
        </ul>
        <ul className="flex gap-[.4] mb-[1.5rem] flex-col">
          <li>
            <Link className="hover:text-[#333] duration-150">Living Room</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Bedroom</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Dining Room</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Office</Link>
          </li>
        </ul>
        <ul className="flex gap-[.4] mb-[3rem] flex-col">
          <li>
            <Link className="hover:text-[#333] duration-150">FAQ</Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">
              Knowledge Base
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#333] duration-150">Live Chat</Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 my-8">
        <FaFacebook className=" text-3xl cursor-pointer duration-200  hover:text-[#35736E] text-[#333]  " />
        <FaInstagram className=" text-3xl duration-200  hover:text-[#457b66] cursor-pointer text-[#333]" />
        <FaTwitter className=" text-3xl duration-200  hover:text-[#457b66] cursor-pointer text-[#333]" />

        <FaLinkedin className=" text-3xl duration-200  hover:text-[#457b66]  cursor-pointer text-[#333]" />
      </div>
      <hr />
      <div className="flex justify-between  items-center mt-5 mb-16  text-[#989898]">
        <p>Copyright ©2025. demoteam@gmail.com. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
