import { Button } from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates </span>& Our{" "}
        <span className="text-coral-red">Newsletter </span>
      </h3>
      <div>
        <input
          type="text"
          placeholder="subsribe@pointgame.com"
          className="input"
        />
        <Button label="Sign Up" fullWidth />
      </div>
    </section>
  );
};

export default Subscribe;
