import facebookIcon from "../assets/Facebook.svg";
import twitterIcon from "../assets/TwitterX.svg";
import telegramIcon from "../assets/Telegram_App.svg";
import instagramIcon from "../assets/Instagram.svg";

const socialIcons = [
  { src: facebookIcon, alt: "facebook icon" },
  { src: twitterIcon, alt: "twitter icon" },
  { src: telegramIcon, alt: "telegram icon" },
  { src: instagramIcon, alt: "instagram icon" },
];
const Footer = () => {
  return (
    <footer>
      <section className="flex flex-wrap gap-2 max-sm:justify-center justify-between items-center p-5 border-2 border-y-black">
        <ul className="flex gap-2 text-darkest max-sm:order-3">
          <li>
            <a href="#" alt="term & policy">
              Term & policy
            </a>
          </li>
          <li>
            <a href="#" alt="map">
              Map
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="font-semibold text-center text-3xl text-darkest max-sm:order-1 max-sm:w-full"
        >
          Fabraze
        </a>
        <div className="flex items-center max-sm:order-2">
          <p className="">Follow us:</p>
          {socialIcons.map((icon, index) => (
            <img key={index} className="size-8" src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </section>

      <section className="p-5">
        <p className="text-center text-sm text-dark">
          © 2015 - 2024 Fabraze. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
