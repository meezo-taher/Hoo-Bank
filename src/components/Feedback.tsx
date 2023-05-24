import styles from "../stlyes";
import { quotes } from "../assets";

styles;
type feedbackProps = {
  content: string;
  name: string;
  title: string;
  img: string;
};

function Feedback({ content, name, title, img }: feedbackProps) {
  return (
    <div
      className={`flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr5 mr-0 my-5 feedback-card cur`}
    >
      <img
        className="w-[42px] h-[27px] object-contain self-center"
        src={quotes}
        alt="quotes"
      />
      {/* <h1>{title}</h1> */}
      <p className="font-poppins my-10 text-[18px] leading-[32px] text-white">
        {content}
      </p>
      <div className={`flex flex-row items-center`}>
        <img
          className={`w-[48px] h-[48px] rounded-full`}
          src={img}
          alt="profile-img"
        />
        <div className="flex flex-1 flex-col text-white ml-4">
          <h4
            className={`font-poppins font-semibold text-[20px] leading-[32px] mb-1`}
          >
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px]  text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
