"use client";
import { motion } from "framer-motion";
import React from "react";
import { colors } from "@/Styles/colors";
import hero from "../public/Images/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={` w-full ${colors.background.primary} min-h-screen flex flex-col md:flex-row items-center justify-between md:gap-10 md:px-20`}
    >
      <aside className="w-full max-w-40 md:max-w-[50%] lg:max-w-[40%] m-auto overflow-hidden rounded-t-full mt-20 lg:mt-10">
        <Image
          src={hero}
          alt="Hero Image"
          placeholder="blur"
          className="w-full h-full"
        />
      </aside>

      <aside
        className={`${colors.text.primary} flex flex-col gap-10 flex-1 items-center md:justify-start mt-5 md:mt-0 lg:pb-20 relative px-5`}
      >
        <h1 className="text-[6vw] md:text-[4vw] leading-tight text-center font-semibold">
          Anxiety & Trauma Therapy in Santa Monica
        </h1>

        <p className="text-base md:text-sm lg:text-xl text-center font-semibold">
          Helping high-achieving adults find calm, clarity, and relief from
          stress and overthinking.
        </p>

        <button
          className={`text-base border ${colors.border.secondary} w-45 text-center p-3 ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer duration-1000 font-semibold
          `}
        >
          BOOK A SESSION
        </button>
      </aside>
    </motion.section>
  );
};

export default Hero;
