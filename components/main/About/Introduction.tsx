"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from "next-themes";

const words = `Squig, a programming language that goes beyond the ordinary, providing additional options in the realm of minimalism and performance exploration. Crafted with a modern mindset and a commitment to innovation.`;

export function Introduction() {
  const { theme } = useTheme();

  return (
    <div className={`px-20 rounded-lg shadow-md mx-auto`}>
      {/* <h2 className={`text-2xl font-bold mb-4 text-${theme === "light" ? "blue-600" : "blue-400"} dark:text-${theme === "light" ? "blue-400" : "blue-600"}`}>Introduction</h2> */}
      {/* <div className={`text-lg  dark:text-${theme === "light" ? "gray-300" : "gray-700"}`}> */}
        <TextGenerateEffect words={words} className="text-white" />
      {/* </div> */}
    </div>
  );
}
