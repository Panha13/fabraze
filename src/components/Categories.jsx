import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

const Category = ({ image, label, link }) => {
  return (
    <figure className="relative w-full h-64 rounded-md overflow-hidden cursor-pointer">
      <a href={link}>
        <img
          className=" w-full h-full object-cover object-center"
          src={image}
          alt={label}
        />
      </a>
      <figcaption className="absolute inset-0 flex items-center justify-center bg-black/10">
        <h1 className="text-4xl text-white uppercase font-medium">{label}</h1>
      </figcaption>
    </figure>
  );
};

const Categories = () => {
  return (
    <section className="flex flex-row gap-3 m-5">
      <figure className="relative w-full h-64 rounded-md overflow-hidden cursor-pointer">
        <a href="#">
          <img
            className=" w-full h-full object-cover object-center"
            src={img1}
            alt=""
          />
        </a>
        <figcaption className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h1 className="text-4xl text-white uppercase font-medium">Men</h1>
        </figcaption>
      </figure>
    </section>
  );
};

export default Categories;
