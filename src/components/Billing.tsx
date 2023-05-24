import { apple, bill, google } from "../assets";
import styles, { layout } from "../stlyes";

function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img className="w-full h-full relative z-[5]" src={bill} alt="bill" />
        {/* gradient */}
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient"></div>
        {/* gradient */}
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading}`}>
          Easily control your <br className="sm:block hidden"></br>billing &
          invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <img
              className="w-[128px] h-[42px] object-contain"
              src={apple}
              alt="apple-store"
            />
          </a>
          <a href="https://play.google.com/store/" target="_blank">
            <img
              className="w-[128px] h-[42px] object-contain"
              src={google}
              alt="google-play"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Billing;
