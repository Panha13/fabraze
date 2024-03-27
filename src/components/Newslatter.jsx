import { ReusableButton } from "./ReusableButton";
import mailIcon from "../assets/mailbox.svg";

const Newslatter = () => {
  return (
    <section className="w-full my-10 py-10 bg-[#F5F5DC]">
      <div className="flex flex-col justify-center items-center max-container px-5 lg:px-20 gap-4">
        <h2 className="text-center uppercase text-darkest text-4xl font-bold">
          Get discount
        </h2>
        <p className="text-center text-dark max-w-[25rem]">
          Join our mailing list to be first to hear about new products and
          special promotions
        </p>
        <div className="w-full max-w-lg border-[2px] border-dark px-3 rounded-md flex justify-between items-center">
          <input
            className="w-full text-md text-dark py-2 focus:outline-none bg-transparent"
            type="text"
            placeholder="Enter your email address"
          />
          <img src={mailIcon} className="size-8" alt="mailIcon" />
        </div>

        <ReusableButton className="rounded-md">Subcribe</ReusableButton>
      </div>
    </section>
  );
};

export default Newslatter;
