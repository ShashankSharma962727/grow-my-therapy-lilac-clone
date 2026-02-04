"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { colors } from "@/Styles/colors";
import { TbMenu } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative w-full flex flex-row-reverse lg:flex-row items-center justify-between py-3 px-5 lg:px-16 ${colors.background.primary}`}
    >
      <h1
        className={`text-xl lg:text-[2.15rem] ${colors.text.primary} font-bold`}
      >
        Maya Reynolds Therapy
      </h1>

      <div className="lg:flex text-xl gap-12 hidden font-semibold">
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </div>


      <button
        onClick={handleMenu}
        className="flex lg:hidden text-2xl lg:text-4xl z-[60]"
      >
        {menu ? <RxCross1 /> : <TbMenu />}
      </button>


      {menu && (
        <motion.div
          initial={{y:30, opacity:0}}
          whileInView={{y:0, opacity:1}}
          transition={{duration:0.5}}
          className={`absolute top-0 left-0 w-full h-screen flex items-center justify-center flex-col text-xl gap-5 font-semibold ${colors.background.primary} ${colors.text.primary} z-50`}
        >
          <Link href="#" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="#" onClick={closeMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
