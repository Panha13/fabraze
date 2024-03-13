import { BiSearch, BiHeart, BiCartAlt, BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="px-10 lg:px-32 flex items-center justify-between max-container h-14">
        <a href="#" className="font-semibold text-4xl">
          Fabraze
        </a>
        <ul className="flex uppercase text-md gap-5 font-medium max-md:hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Boys</a>
          </li>
          <li>
            <a href="#">Girls</a>
          </li>
        </ul>
        <div className="flex gap-3 text-2xl">
          <a href="#">
            <BiSearch />
          </a>
          <a href="#">
            <BiHeart />
          </a>
          <a href="#" className="max-md:hidden">
            <BiCartAlt />
          </a>
          <a href="#">
            <BiUser />
          </a>
          <button className="md:hidden">
            <AiOutlineMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
