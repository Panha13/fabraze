import { BiSearch, BiHeart, BiCartAlt, BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setMenu(false)
    );
  }, []);

  return (
    <>
      <nav className="px-5 lg:px-32 bg-white max-container">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="font-semibold text-4xl">
            Fabraze
          </a>
          <ul className="flex uppercase text-md gap-5 font-medium max-md:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
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
            <button onClick={toggleMenu} className="md:hidden">
              <AiOutlineMenu />
            </button>
          </div>
        </div>
        <div className={`pb-3  ${menu ? "" : "hidden"}`}>
          <ul className="block uppercase text-md font-medium">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
