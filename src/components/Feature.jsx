import { useState } from "react";
import { featureProduct as fproducts } from "../constants/index";
// import { SlArrowDown } from "react-icons/sl";
import Loadmore from "../assets/load_more.svg";

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

  const handleColorClick = (id, color) => {
    const updatedItems = [...products];
    const index = updatedItems.findIndex((p) => p.index === id);
    if (index !== -1) {
      updatedItems[index] = { ...updatedItems[index], currentIndex: color };
      setProducts(updatedItems);
    }
  };

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
            <article key={item.index} className="relative ">
              <figure className="w-full aspect-[9/14] overflow-hidden relative hover:cursor-pointer">
                {/* Product images */}
                <div className="h-full relative group">
                  <img
                    src={item.variants[item.currentIndex].images[0]}
                    alt={item.pname.replace(" ", "")}
                    className="absolute z-0 object-cover w-full h-full"
                  />
                  <img
                    src={item.variants[item.currentIndex].images[1]}
                    alt="product"
                    className="absolute object-cover w-full h-full opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Product tag */}
                {item.tag && (
                  <div
                    className={`px-3 absolute z-[15] top-5 flex justify-center items-center ${
                      item.tag === "hot"
                        ? "bg-red"
                        : item.tag === "new"
                        ? "bg-darkest"
                        : item.tag === "sale"
                        ? "bg-lime-600"
                        : ""
                    }`}
                  >
                    <span className="text-white uppercase">{item.tag}</span>
                  </div>
                )}
              </figure>

              {/* Product details */}
              <div className="py-2 px-1 font-medium text-md">
                <h3 className="text-darkest ">{item.pname}</h3>
                <div className="flex flex-wrap gap-x-3 ">
                  {item.discount ? (
                    <>
                      {/* Discounted price */}
                      <p className="text-dark font-semibold">
                        $
                        {(
                          item.price -
                          (item.price * item.discount) / 100
                        ).toFixed(2)}
                      </p>
                      {/* Original price */}
                      <p className="line-through text-dark">
                        ${item.price.toFixed(2)}
                      </p>
                      {/* Discount percentage */}
                      <p className="text-red font-semibold">
                        {item.discount}% off
                      </p>
                    </>
                  ) : (
                    // Regular price
                    <p className="text-dark font-semibold">
                      ${item.price.toFixed(2)}
                    </p>
                  )}
                </div>

                {/* Color variants */}
                <ul className="flex gap-2 my-2">
                  {item.variants.map((variant, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer ${
                        index === item.currentIndex
                          ? `border-[1.5px] border-black`
                          : ""
                      }`}
                      onClick={() => handleColorClick(item.index, index)}
                    >
                      <div
                        className="w-5 h-5 border-[1.5px] border-light"
                        style={{ backgroundColor: variant.color }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
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

export default Feature;
