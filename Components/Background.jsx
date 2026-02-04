"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { colors } from "@/Styles/colors";

const Background = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownData = [
    {
      Q: "Education",
      A: "I earned my Doctorate in Clinical Psychology (PsyD) from the University of California, Los Angeles, where my training focused on anxiety, trauma, and stress-related disorders. Before that, I completed a Master’s degree in Clinical Psychology at the University of California, Santa Barbara, and a Bachelor’s in Psychology from Stanford University.",
    },
    {
      Q: "Licensure",
      A: "I’m a Licensed Clinical Psychologist in the state of California (License No. PSY 28764) and provide both in-person and telehealth sessions for adults across the state.",
    },
    {
      Q: "Certifications",
      A: "Over the years, I’ve pursued advanced training in Eye Movement Desensitization and Reprocessing (EMDR), Mindfulness-Based Stress Reduction (MBSR), and trauma-focused therapy approaches. These methods allow me to combine practical tools with deeper, body-oriented healing work tailored to each client’s needs.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`${colors.text.primary} ${colors.background.secondary} w-full flex flex-col gap-10 justify-center items-center py-30`}
    >
      <h1 className="md:text-[3vw] text-[6vw] font-semibold">
        My Professional Background
      </h1>
      <div className="w-[80%] md:w-[50%]">
        {dropdownData.map((e, index) => (
          <div
            className={`border-y ${colors.border.secondary} p-4`}
            key={index}
          >
            <p
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="text-2xl cursor-pointer"
            >
              {e.Q}
            </p>

            {activeIndex === index && <p className="text-xl mt-2">{e.A}</p>}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Background;
