// import styles from "../stlyes";
// import Button from "./Button";

import styles from "../stlyes";
import Button from "./Button";

export default function CTA() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[10px] sm:flex-row flex-col justify-between`}
    >
      <div className="flex flex-col flex-1">
        <h2 className={`${styles.heading}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} maw-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
        <Button styles={""} />
      </div>
    </section>
  );
}
