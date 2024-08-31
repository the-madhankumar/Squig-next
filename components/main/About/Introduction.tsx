// "use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { useTheme } from "next-themes";


export function Introduction() {

  const words = `Squig, a programming language crafted with a passion for exploration. Unlike traditional languages, Squig doesn't chase performance efficiency or real-world applications—at least not yet.
  Instead, it's a playground, a place to experiment and learn without the pressure of practical use. Think of Squig as a canvas for your coding creativity, where you're free to explore ideas and push the boundaries of what's possible in programming.`;
  // const { theme } = useTheme();

  return (
    <div className={`px-20 rounded-lg shadow-md mx-auto`}>
      {/* <h2 className={`text-2xl font-bold mb-4 text-${theme === "light" ? "blue-600" : "blue-400"} dark:text-${theme === "light" ? "blue-400" : "blue-600"}`}>Introduction</h2> */}
      {/* <div className={`text-lg  dark:text-${theme === "light" ? "gray-300" : "gray-700"}`}> */}
        <TextGenerateEffect words={words} className="text-white" />
      {/* </div> */}
    </div>
  );
}
