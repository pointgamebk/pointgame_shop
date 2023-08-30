import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Choose from a wide range of products and services, and enjoy exclusive
          discounts for first-time customers.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          point.game users can also enjoy exclusive discounts based on location
          and time of day. Keep playing games to be selected.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;