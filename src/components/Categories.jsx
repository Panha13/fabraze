import PropTypes from "prop-types";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

const Category = ({ image, label, link }) => {
  return (
    <figure className="relative w-full h-40 lg:h-64 rounded-md overflow-hidden cursor-pointer">
      <a href={link}>
        <img
          className=" w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
          src={image}
          alt={label}
        />
      </a>
      <figcaption className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10">
        <h1 className="text-4xl text-white uppercase font-medium">{label}</h1>
      </figcaption>
    </figure>
  );
};

const Categories = () => {
  const categories = [
    { image: img1, label: "Men", link: "#men" },
    { image: img2, label: "Women", link: "#women" },
    { image: img3, label: "Kids", link: "#kids" },
  ];
  return (
    <section className="flex max-sm:flex-col flex-row gap-3 m-5">
      {categories.map((category, index) => (
        <Category
          key={index}
          image={category.image}
          label={category.label}
          link={category.link}
        />
      ))}
    </section>
  );
};

Category.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Categories;
