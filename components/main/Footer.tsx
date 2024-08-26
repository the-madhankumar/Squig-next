"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import sampleArcs from "@/data/arcs";
import globeConfig from "@/data/globe.config";
// import { World } from "@/components/ui/globe";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Footer() {
  
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <div className="w-full mx-auto relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore the World with Squig
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Tap into dynamic capabilities to visualize intricate data interactions, execute complex algorithms, and innovate using our dynamic <span className="text-blue-600"><b><i>SQUIG</i></b></span> interface.
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-black z-40" />
        <div className="relative w-49 -bottom-20 h-52 md:h-full z-10">
          {/* <World data={sampleArcs} globeConfig={globeConfig} /> */}
        </div> 
      </div>
    </div>
  );
}

export default Footer;
