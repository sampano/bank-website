import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const FeatureCard = () => {
    <div>

    </div>
}

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex md:flex-row flex-col sm:py-16 py-6">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning reward and saving money. But with hundreds of
          credit card on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="flex-1 flex  justify-center items-center  md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {features.map((feature, index) => (<FeatureCard key={feature.id}))}
      </div>
    </section>
  );
};

export default Business;
