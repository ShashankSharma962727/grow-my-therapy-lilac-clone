import React from "react";
import Image from "next/image";
import motive from "../public/Images/Motive.webp";
import { colors } from "@/Styles/colors";

const Motivates = () => {
  return (
    <section
      className={`${colors.text.primary} min-h-screen flex flex-col md:flex-row`}
    >
      
      <aside className="relative w-full md:flex-1 aspect-video md:aspect-auto">
        <Image
          src={motive}
          alt="Motives"
          placeholder="blur"
          fill
          className="object-cover"
        />
      </aside>

      <aside
        className={`${colors.background.accent} flex-1 flex flex-col`}
      >
        <div className="flex flex-col gap-6 px-6 md:px-14 py-10 md:py-0 justify-center grow">
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-tight">
            You don’t have to do this all <i>alone</i>.
          </h1>

          <p className="text-[clamp(1rem,3vw,1.125rem)]">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="list-disc pl-6 flex flex-col gap-3 text-[clamp(1rem,3vw,1.125rem)]">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-[clamp(1rem,3vw,1.125rem)]">
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
        </div>

        <div
          className={`flex justify-center items-center py-6 border-t ${colors.border.secondary}
          ${colors.buttonBgHover.primary} ${colors.buttonTextHover.primary}
          cursor-pointer transition-all duration-700`}
        >
          <p className="text-sm tracking-wide">WORK WITH ME</p>
        </div>
      </aside>
    </section>
  );
};

export default Motivates;
