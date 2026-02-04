"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import maditation from "../public/Images/maditation.jpg";
import { colors } from "@/Styles/colors";

const Motivates = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.text.primary} min-h-screen flex flex-col md:flex-row`}
    >
      <aside className="relative w-full md:flex-1 aspect-video md:aspect-auto">
        <Image
          src={maditation}
          alt="Motives"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </aside>

      <aside className={`${colors.background.accent} flex-1 flex flex-col`}>
        <div className="flex flex-col gap-6 px-6 md:px-14 py-10 md:py-0 justify-center grow">
          <h1 className="text-[clamp(1.8rem,5vw,4rem)] leading-tight font-semibold">
            You Don’t Have to Face This Alone<i>Alone</i>
          </h1>

          <p className="text-[clamp(1rem,3vw,1.125rem)] font-semibold">
            If you’re feeling stuck, overwhelmed, or disconnected from yourself,
            there’s hope.
          </p>

          <ul className="list-disc pl-6 flex flex-col gap-3 text-[clamp(1rem,3vw,1.125rem)] font-semibold">
            <li>Persistent feelings of sadness, worry, or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>
              A sense that you’re always bracing for something to go wrong
            </li>
          </ul>

          <p className="text-[clamp(1rem,3vw,1.125rem)] font-semibold">
            With warmth and guidance, we’ll work together to help you feel
            calmer, more grounded, and in control of your life again.
          </p>
        </div>

        <div
          className={`flex justify-center items-center py-6 border-t ${colors.border.secondary}
          ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary}
          cursor-pointer transition-all duration-700`}
        >
          <p className="text-base tracking-wide font-semibold">
            WORK WITH ME
          </p>
        </div>
      </aside>
    </motion.section>
  );
};

export default Motivates;
