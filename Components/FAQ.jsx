"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { colors } from "@/Styles/colors";
import Image from "next/image";
import faq from "../public/Images/faq.jpg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownData = [
    {
      Q: "Do you offer online sessions?",
      A: "Yes. I offer both in-person sessions in Santa Monica and secure telehealth therapy across California.",
    },
    {
      Q: "What approaches do you use?",
      A: "I integrate CBT, EMDR, mindfulness, and body-oriented methods to help clients manage anxiety, trauma, and burnout effectively.",
    },
    {
      Q: "Who do you typically work with?",
      A: "Most of my clients are adults—often professionals or creatives—who appear successful outwardly but struggle with anxiety, stress, or emotional exhaustion.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.background.primary} ${colors.text.primary} min-h-screen w-full flex flex-col md:flex-row px-5 md:px-20 py-30`}
    >
      <aside className="flex-1 flex">
        <div className="w-full max-w-40 md:max-w-[65%] m-auto overflow-hidden rounded-t-full mt-20 lg:mt-10">
          <Image
            src={faq}
            alt="FAQ"
            placeholder="blur"
            className="oject-cover"
          />
        </div>
      </aside>

      <aside className="flex flex-col flex-1 gap-5 md:gap-10 justify-center">
        <h1 className="text-[7vw] md:text-[5vw] mt-10 md:mt-0">FAQs</h1>
        <div>
          {dropdownData.map((e, index) => (
            <div
              className={`border-y ${colors.border.secondary} p-4`}
              key={index}
            >
              <p
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="text-[5vw] md:text-[2vw] leading-tight cursor-pointer"
              >
                {e.Q}
              </p>

              {activeIndex === index && (
                <p className="text-sm md:text-lg mt-2 font-semibold">{e.A}</p>
              )}
            </div>
          ))}
        </div>
      </aside>
    </motion.section>
  );
};

export default FAQ;
