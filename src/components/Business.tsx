// import React from "react";
import styles, { layout } from "../stlyes";
import Button from "./Button";
import { features } from "../constants";

type featureProps = {
  icon: string;
  title: string;
  index: number | string;
  content: string;
};
const FeatureCard = ({ icon, title, index, content }: featureProps) => {
  return (
    <div
      className={` flex flex-row p-6 rounded-[20px] cursor-pointer ${
        index !== features.length ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue `}
      >
        <img src={icon} alt={title} className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex flex-1 flex-col text-white ml-3">
        <h4
          className={`font-poppins font-semibold text-[18px] leading-[23px] mb-1`}
        >
          {title}
        </h4>
        <p className="font-poppins font-normal text-[18px] leading-[24px] mb-1 text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
};

function Business() {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading}`}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10"></Button>
      </div>
      <div
        className={`${layout.sectionImg}
      flex-col`}
      >
        {features.map((feature, index) => {
          const { icon, title, content } = feature;
          return (
            <FeatureCard
              key={feature.id}
              icon={icon}
              title={title}
              index={index}
              content={content}
            ></FeatureCard>
          );
        })}
      </div>
    </section>
  );
}

export default Business;
