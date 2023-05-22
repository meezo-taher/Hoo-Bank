import React from "react";
type props = {
  styles: string;
};
function Button({ styles }: props) {
  return (
    <button
      type="button"
      className={`${styles} font-poppins text-[18px] text-primary outline-none py-4 px-6 rounded-[10px] bg-blue-gradient`}
    >
      Get Started
    </button>
  );
}

export default Button;
