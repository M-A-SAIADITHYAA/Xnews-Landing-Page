import { X } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { navData } from "./nav.ts";
import { Button } from "./ui/button.tsx";
import { RainbowButton } from "./magicui/rainbow-button.tsx";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b-gray-50 border-b-2 p-4 h-20 w-full  mb-4 backdrop-blur-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
            className="flex items-center gap-2"
          >
            <X className="size-10 text-cyan-400" />
            <span className="text-white font-extrabold font-roboto p-4 text-3xl">
              Xnews
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-2">
            {navData.map((links,index)=>(
              <motion.div 
              key={index}
              initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
             whileHover={{scale:1.05}}
             whileTap={{scale:0.95}}
            ><ul className="texted-muted px-4 py-2 hover:cursor-pointer">{links.title}</ul></motion.div>

            ))}
          </nav>
          <motion.div 
              
              initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
             whileHover={{scale:1.05}}
             whileTap={{scale:0.95}}>
              
          <RainbowButton  className="">
            

            Visit Now
          </RainbowButton >
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
