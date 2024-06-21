import { useState } from "react";
import PropTypes from "prop-types";
import { featureProduct as fproducts } from "../constants/index";
// import { SlArrowDown } from "react-icons/sl";
import Loadmore from "../assets/load_more.svg";
import ProductCard from "./ProductCard";

const navItems = ["Best Seller", "New Arrrivals", "Sale Product"];
const NavItems = ({ label, isActive, onClick }) => {
  return (
    <li
      className={isActive ? "activeMenu relative z-10" : ""}
      onClick={onClick}
    >
      <a href={`#${label.replace(" ", "").toLowerCase()}`}>{label}</a>
    </li>
  );
};

const Feature = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [products, setProducts] = useState(fproducts);

  return (
    <main className="max-container px-5 lg:px-20">
      {/* NavItems */}
      <section className="mt-12 flex justify-center max-sm:justify-start items-center">
        <ul className="relative h-10 flex justify-center item-center gap-4 max-sm:gap-3 text-center md:text-lg font-medium text-dark">
          {navItems.map((item, index) => (
            <NavItems
              key={index}
              label={item}
              isActive={index === activeItem}
              onClick={() => setActiveItem(index)}
            />
          ))}
          <div className="absolute bottom-0 inset-x-0 border-b-[3px] border-light  z-0"></div>
        </ul>
      </section>

      {/* Product section */}
      <section className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-2">
          {products.map((item) => (
            <ProductCard
              key={item.index}
              item={item}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </div>
      </section>

      {/* Load more button */}
      <section className="flex justify-center items-center">
        <button className="flex flex-col items-center">
          <p className="text-dark text-md">Load more</p>
          <img src={Loadmore} className="animate-bounce size-6 text-dark" />
        </button>
      </section>
    </main>
  );
};

NavItems.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Feature;
