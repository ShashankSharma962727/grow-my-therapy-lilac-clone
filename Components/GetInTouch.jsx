import React from "react";
import { colors } from "@/Styles/colors";

const GetInTouch = () => {
  return (
    <section
      className={`${colors.text.secondary} ${colors.background.getInTouch} w-full flex flex-col justify-center items-center py-30 gap-10`}
    >
      <h1 className="text-[7vw] md:text-[5vw] lg:text-[3vw]">Get started today.</h1>
      <p className="text-[3vw] md:text-[3vw] lg:text-[2vh] text-center">
        Ready to take the first step towards a happier, healthier you? <br />Contact
        me to book your first session. I look forward to starting this
        therapeutic journey  <br />with you.
      </p>
      <button 
      className={`mt-10 text-sm border ${colors.border.primary} w-38 text-center p-2 ${colors.buttonBgHover.secondary} ${colors.buttonTextHover.secondary} cursor-pointer duration-1000`}
      >GET IN TOUCH
      </button>
    </section>
  );
};

export default GetInTouch;
