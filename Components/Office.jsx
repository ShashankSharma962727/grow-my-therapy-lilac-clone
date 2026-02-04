"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import office1 from "../public/Images/office1.jpeg";
import office2 from "../public/Images/office2.jpeg";
import { colors } from "@/Styles/colors";

export default function OurOffice() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`py-20 px-6 md:px-12 border-b ${colors.border.secondary} ${colors.background.secondary} ${colors.text.primary}`}
    >
      <div className="w-full mx-auto">
        <div className="text-center mb-10 font-semibold">
          <h2 className="text-3xl md:text-[4vw] font-semibold">Our Office</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10">
          <div className="flex flex-col justify-between h-full">
            <div className="p-6">
              <h3 className="text-2xl md:text-4xl font-semibold mb-2">
                Visit the Office
              </h3>
              <p className="text-lg md:text-2xl">
                123th Street 45 W, Santa Monica, CA 90401
              </p>
              <p className="mt-3 text-lg md:text-2xl leading-relaxed">
                In-person and secure telehealth sessions available. The office
                is designed to feel safe, calm, and grounding.
              </p>
            </div>

            <div className="rounded-md overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.382227695565!2d-118.49119178478377!3d34.01945488061367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4ddf9b51f4f%3A0x6df004a97c6e3f7c!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1706640000000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Dr. Maya Reynolds Office Location – Santa Monica"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative h-80 rounded-md overflow-hidden">
              <Image
                src={office1}
                alt="Therapy room with natural light"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-md overflow-hidden">
              <Image
                src={office2}
                alt="Comfortable seating area in office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
