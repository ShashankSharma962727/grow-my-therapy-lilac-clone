"use client";

import React, { useState } from "react";
import { colors } from "@/Styles/colors";
import Image from "next/image";
import faq from "../public/Images/FAQ.webp";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownData = [
    {
      Q: "Do you take insurance?",
      A: "Answer 1",
    },
    {
      Q: "What are your rates?",
      A: "Answer 2",
    },
    {
      Q: "Do you have any openings?",
      A: "Answer 3",
    },
  ];
  
  return (
    <section
      className={`${colors.background.primary} ${colors.text.primary} min-h-screen w-full flex flex-col md:flex-row px-20 py-30`}
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
        <h1 className="text-[5vw]">FAQs</h1>
        <div>
          {dropdownData.map((e, index) => (
            <div className={`border-y ${colors.border.secondary} p-4`} key={index}>
              <p
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="text-[5vw] md:text-[3vw] leading-tight cursor-pointer"
              >
                {e.Q}
              </p>

              {activeIndex === index && <p className="text-sm md:text-lg mt-2">{e.A}</p>}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default FAQ;
