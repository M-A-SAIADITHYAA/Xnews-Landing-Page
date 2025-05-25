
import { motion } from "motion/react";
import { navData } from "./nav.ts";

import { RainbowButton } from "./magicui/rainbow-button.tsx";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b-gray-50  p-4  w-full  pb-5 backdrop-blur-md ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
            className="flex items-center gap-2"
          >
            <a href="https://x.com/sai_45_tech" target="_blank" rel="noopener">
            <img src='/xlogo.avif' className="size-12 text-cyan-400"  /></a>
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
            ><a  href={links.href}className="texted-muted px-4 py-2 text-xl hover:cursor-pointer">{links.title}</a></motion.div>

            ))}
          </nav>
          <motion.div 
              
              initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 20 }}
             whileHover={{scale:1.05}}
             whileTap={{scale:0.95}}>
              
              <a href="https://x.com/sai_45_tech" target="_blank" rel="noopener">
          <RainbowButton  className="text-black " >
            

            Visit Now
          </RainbowButton >
          </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
