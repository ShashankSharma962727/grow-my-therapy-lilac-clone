"use client";
import { motion } from "framer-motion";
import React from "react";
import ServiceCard from "./ServiceCard";
import { colors } from "@/Styles/colors";
import card1 from "../../public/Images/Service1.jpg";
import card2 from "../../public/Images/Service2.jpg";
import card3 from "../../public/Images/service3.jpg";

const ServiceData = [
  {
    title: "Anxiety & Stress Therapy",
    desc: "Learn to calm your mind and body using practical tools and evidence-based techniques. Together, we’ll identify triggers, reduce overthinking, and create a more relaxed, grounded daily life.",
    image: card1,
  },
  {
    title: "Trauma & EMDR Therapy",
    desc: "Heal from past experiences that continue to shape your present. I use EMDR and mindfulness-based approaches to help you feel safer, more confident, and emotionally steady.",
    image: card2,
  },
  {
    title: "Perfectionism Recovery",
    desc: "For professionals and creatives who feel disconnected or drained, therapy offers space to slow down, reflect, and rebuild balance—without losing your drive.",
    image: card3,
  },
];

const Service = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`w-full min-h-screen ${colors.text.primary} ${colors.background.primary} flex flex-col gap-15 items-center pt-30 pb-30`}
    >
      <h1 className="text-[6vw] md:text-[4vw] font-semibold">How I Can Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-15 gap-5">
        {ServiceData.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            desc={card.desc}
            image={card.image}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Service;
