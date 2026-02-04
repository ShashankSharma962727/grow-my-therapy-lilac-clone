"use client";
import { motion } from "framer-motion";
import React from "react";
import { colors } from "@/Styles/colors";

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.text.primary}`}
    >
      <div
        className={`flex flex-col md:flex-row ${colors.background.primary} pt-10 px-10 pb-30`}
      >
        <aside className="flex-1 text-base md:text-xl text-center md:text-start">
          <h1 className="text-3xl md:text-5xl">Maya Reynolds Therapy</h1>
          <p className="pt-10">123th Street 45 W,</p>
          <p>Santa Monica, CA 90401</p>

          <p className="pt-10 underline">email@example.com</p>
          <p className="underline">(555) 555-5555</p>
        </aside>

        <aside className="flex flex-col md:flex-row w-full md:w-[35%] justify-between items-center">
          <div className="text-base text-center flex flex-col gap-0 md:gap-15 md:text-start md:text-xl w-full">
            <h2 className="text-2xl md:text-3xl mt-10 md:mt-0">Hours</h2>
            <p className="">
              <p className="mt-10 md:mt-0">Monday – Friday</p>
              <p>10am – 6pm</p>
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl mt-10 md:mt-0">Find</h2>
            <p className="flex flex-col pt-10 text-base md:text-xl text-center md:text-end underline">
              <span>Home</span>
              <span>Contact</span>
              <span>Blog</span>
            </p>
          </div>
        </aside>
      </div>

      <footer
        className={`w-full ${colors.background.secondary} flex flex-col items-center gap-10 md:gap-20 p-20`}
      >
        <div className="text-center">
          <p>
            <span className="underline ml-2">Privacy & Cookies Policy</span>
            <span className="underline ml-2">Good Faith Estimate</span>
            <span className="underline ml-2">
              Website Terms & Conditions
            </span>{" "}
            <span className="underline ml-2">Disclaimer</span>
          </p>
          <p>
            Website Template Credits:{" "}
            <span className="underline ml-2">Go Bloom Creative</span>
          </p>
        </div>
        <p className="text-center text-sm md:text-base">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </footer>
    </motion.section>
  );
};

export default Footer;
