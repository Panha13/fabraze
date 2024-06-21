import React, { useState } from "react";
import PropTypes from "prop-types";

function ProductCard({ item, products, setProducts }) {
  const handleColorClick = (id, color) => {
    const updatedItems = [...products];
    const index = updatedItems.findIndex((p) => p.index === id);
    if (index !== -1) {
      updatedItems[index] = { ...updatedItems[index], currentIndex: color };
      setProducts(updatedItems);
    }
  };
  return (
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
                ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
              </p>
              {/* Original price */}
              <p className="line-through text-dark">${item.price.toFixed(2)}</p>
              {/* Discount percentage */}
              <p className="text-red font-semibold">{item.discount}% off</p>
            </>
          ) : (
            // Regular price
            <p className="text-dark font-semibold">${item.price.toFixed(2)}</p>
          )}
        </div>

        {/* Color variants */}
        <ul className="flex gap-2 my-2">
          {item.variants.map((variant, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                index === item.currentIndex ? `border-[1.5px] border-black` : ""
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
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default ProductCard;
