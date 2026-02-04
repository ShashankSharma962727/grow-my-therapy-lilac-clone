"use client";
import { motion } from "framer-motion";
import React from "react";
import { colors } from "@/Styles/colors";
import Image from "next/image";
import about from "../public/Images/about.jpg";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen w-full flex flex-col-reverse md:flex-row overflow-hidden"
    >
      <aside
        className={`${colors.background.secondary} ${colors.text.primary} flex-1 flex flex-col`}
      >
        <div className="w-full grow flex flex-col mt-6 md:mt-0 justify-start md:justify-center px-8 md:px15 gap-6">
          <h1 className="text-[7.5vw] md:text-[4vw] font-semibold ">
            Therapy That Helps You Feel Grounded and Whole
          </h1>
          <p className="text-base lg:text-lg font-semibold">
            Life can feel overwhelming when you’re constantly pushing yourself
            to hold everything together — work, relationships, responsibilities,
            and expectations.
          </p>
          <p className="text-base lg:text-lg font-semibold">
            You don’t have to keep managing it all alone. Whether you’re feeling
            anxious, burned out, or stuck in old patterns, therapy can help you
            slow down, understand what’s happening underneath, and start feeling
            more like yourself again.
          </p>
        </div>

        <div
          className={`border-t ${colors.border.secondary} w-full text-base font-semibold py-4 md:py-6 flex items-center justify-center 
        ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer duration-1000`}
        >
          GET IN TOUCH
        </div>
      </aside>

      <aside className="w-full aspect-video md:aspect-auto overflow-hidden flex-0 md:flex-1 relative">
        <Image
          src={about}
          alt="About"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </aside>
    </motion.section>
  );
};

export default About;
