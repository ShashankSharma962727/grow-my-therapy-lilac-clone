"use client";

import React, { useState } from "react";
import { colors } from "@/Styles/colors";

const Background = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownData = [
    {
      Q: "Education",
      A: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
      Q: "Licensure",
      A: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
      Q: "Certifications",
      A: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
  ];

  return (
    <section
      className={`${colors.text.primary} ${colors.background.secondary} w-full flex flex-col gap-10 justify-center items-center py-30`}
    >
      <h1 className="md:text-[3vw] text-[4vw]">My Professional Background</h1>
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
    </section>
  );
};

export default Background;
