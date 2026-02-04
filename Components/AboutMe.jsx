"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import drMaya from "../public/Images/drMaya.png";
import flower from "../public/Images/flower.jpg";
import { colors } from "@/Styles/colors";

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.background.secondary} ${colors.text.primary} flex flex-col-reverse md:flex-row w-full min-h-screen pt-30 pb-60`}
    >
      <aside className="flex-1 flex flex-col justify-center gap-6 px-6 md:px-10 py-10 md:py-0">
        <h1 className="lg:text-[3vw] md:text-[4vw] text-[6vw] font-semibold">
          Meet Dr. Maya Reynolds, PsyD
        </h1>

        <p className="text-[clamp(1rem,4vw,1.125rem)] md:text-xl leading-relaxed font-semibold">
          I’m a licensed clinical psychologist based in Santa Monica,
          California. I work with adults who feel constantly on edge, exhausted,
          or caught in cycles of overthinking and self-pressure.
        </p>
        <p className="text-[clamp(1rem,4vw,1.125rem)] md:text-xl leading-relaxed font-semibold">
          My approach blends structure with depth—grounded, warm, and
          collaborative. I integrate cognitive-behavioral therapy (CBT), EMDR,
          mindfulness, and body-oriented methods to help clients reconnect with
          themselves emotionally and physically.
        </p>
        <p className="text-[clamp(1rem,4vw,1.125rem)] md:text-xl leading-relaxed font-semibold">
          Therapy with me is more than symptom relief. It’s about slowing down,
          understanding your patterns, and developing sustainable ways to feel
          calm, confident, and connected again.
        </p>

        <button
          className={`text-base border ${colors.border.secondary} w-40 md:w-36 text-center p-3 mt-10 md:mt-20
           ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary} cursor-pointer transition-all duration-700 mx-auto font-semibold`}
        >
          LET'S CHAT
        </button>
      </aside>

      <aside className="flex-1 flex justify-center items-center py-10 md:py-0 md:pr-20">
        <div className="relative w-[40%] md:w-full lg:w-[75%]">
          <div className="rounded-t-full overflow-hidden">
            <Image
              src={drMaya}
              alt="contact"
              placeholder="blur"
              className="object-cover w-full"
            />
          </div>

          <div className="absolute -bottom-15 -right-15 md:-bottom-20 md:-right-20 w-35 md:w-[60%] rounded-full overflow-hidden">
            <Image
              src={flower}
              alt="Flower"
              placeholder="blur"
              className="object-cover aspect-square"
            />
          </div>
        </div>
      </aside>
    </motion.section>
  );
};

export default AboutMe;
