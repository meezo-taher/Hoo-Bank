import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../stlyes";

function CardDeal() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading}`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img className="w-full h-full" src={card} alt="" />
      </div>
    </section>
  );
}

export default CardDeal;
