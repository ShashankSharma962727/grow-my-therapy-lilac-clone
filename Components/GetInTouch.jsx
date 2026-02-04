"use client";
import { motion } from "framer-motion";
import React from "react";
import { colors } from "@/Styles/colors";

const GetInTouch = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.text.secondary} ${colors.background.getInTouch} w-full flex flex-col justify-center items-center py-30 gap-10`}
    >
      <h1 className="text-[7vw] md:text-[5vw] lg:text-[3vw]">
        Ready to Begin?
      </h1>
      <p className="text-[4vw] md:text-[3vw] lg:text-[2vh] text-center">
        Therapy can help you feel grounded and at peace again. Take the first
        step toward change.
      </p>
      <button
        className={`mt-10 text-base border ${colors.border.primary} text-center py-3 px-4 ${colors.buttonBgHover.secondary} ${colors.buttonTextHover.secondary} cursor-pointer duration-1000`}
      >
        Schedule a Consultation
      </button>
    </motion.section>
  );
};

export default GetInTouch;
