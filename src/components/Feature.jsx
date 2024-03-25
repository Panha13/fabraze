import { useState } from "react";
import fProduct from "../assets/pfeature1.png";
import { featureProduct as fproducts } from "../constants/index";

const navItems = ["Best Seller", "New Arrivals", "Sale Product"];
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
  return (
    <main className="max-container px-5 lg:px-20">
      <section className="mt-16 flex justify-center items-center">
        <ul className="relative h-10 flex justify-center item-center gap-4 text-center md:text-lg font-medium text-dark">
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
      <section className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fproducts.map((item) => (
            <a
              href={`/product/${item.index}`}
              key={item.index}
              className="hover:cursor-pointer"
            >
              <article className="relative">
                <figure className="aspect-[9/12] overflow-hidden">
                  <div className="h-full">
                    <img
                      src={item.image}
                      alt={item.pname.replace(" ", "")}
                      className=" object-cover w-full h-full transition-transform transform ease-out duration-300 hover:scale-105"
                    />
                  </div>
                  {item.tag && (
                    <div
                      className={`px-3 absolute top-5 flex justify-center items-center ${
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
                <div className="py-2 px-1 font-medium text-md">
                  <h3 className="text-darkest ">{item.pname}</h3>
                  <div className="flex flex-wrap gap-x-3 ">
                    {item.discount ? (
                      <>
                        <p className="text-darkest font-semibold">
                          $
                          {(
                            item.price -
                            (item.price * item.discount) / 100
                          ).toFixed(2)}
                        </p>
                        <p className="line-through text-dark">
                          ${item.price.toFixed(2)}
                        </p>
                        <p className="text-red font-semibold">
                          {item.discount}% off
                        </p>
                      </>
                    ) : (
                      <p className="text-darkest font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 my-2">
                    {item.color.map((color, index) => (
                      <div
                        key={index}
                        className="border-2 w-5 h-5 border-black cursor-pointer"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Feature;
