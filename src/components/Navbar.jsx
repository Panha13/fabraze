import { BiSearch, BiHeart, BiCartAlt, BiUser } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    // Disable body scroll when menu is open
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Add resize event listener
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Add onscroll event listener
    const handleScroll = () => {
      const scrollTop = scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener and reset overflow when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  return (
    <nav
      className={`sticky top-0 px-5 lg:px-32 z-50 max-container ${
        scrolled ? "bg-white/70 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between h-14">
        <a href="#" className="font-semibold text-3xl sm:text-4xl text-darkest">
          Fabraze
        </a>
        <ul className="flex uppercase text-darkest text-md gap-5 font-medium max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 sm:gap-3 text-2xl">
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

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white/5 backdrop-blur-sm transition-opacity ${
          menu ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed top-0 right-0 w-64 h-full z-50 bg-white p-5 transform transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col gap-3 uppercase text-darkest text-2xl font-medium">
            <button
              className="text-4xl self-end rounded-full transition ease-in-out duration-300 hover:bg-black/15"
              onClick={toggleMenu}
            >
              <IoCloseOutline />
            </button>

            {navLinks.map((item) => (
              <li key={item.label} className="">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
