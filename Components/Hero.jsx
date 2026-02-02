import React from "react";
import { colors } from "@/Styles/colors";
import hero from "../public/Images/Hero.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={` w-full ${colors.background.primary} min-h-screen flex flex-col md:flex-row items-center justify-between md:gap-10 md:px-20`}
    >
      <aside className="w-full max-w-40 md:max-w-[50%] lg:max-w-[40%] m-auto overflow-hidden rounded-t-full mt-20 lg:mt-10">
        <Image src={hero}
        alt="Hero Image"
        placeholder="blur"
        className="w-full h-full" />
      </aside>
      
      <aside
        className={`${colors.text.primary} flex flex-col gap-10 flex-1 items-center md:justify-start mt-5 md:mt-0 lg:pb-20 relative`}
      >
        <h1 className="text-[7vw] md:text-[5vw] leading-[7vw] md:leading-[5.5vw] text-center">
          Live your life <br /> in full bloom
        </h1>

        <p className="text-base md:text-sm lg:text-lg text-center">
          Therapy for Adults in Minneapolis, MN.
        </p>
        
        <button 
        className={`text-sm border ${colors.border.secondary} w-45 text-center p-3 ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer duration-1000`}
        >CONNECT WITH ME
        </button>
      </aside>
    </section>
  );
};

export default Hero;
