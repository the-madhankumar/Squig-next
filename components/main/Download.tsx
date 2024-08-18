"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function DownloadSection() {
  const words = [
    {
      text: "Download",
      className: "text-xl sm:text-[30px]",
    },
    {
      text: "the latest",
      className: "text-xl sm:text-[30px]",
    },
    {
      text: "version",
      className: "text-xl sm:text-[30px]",
    },
    {
      text: "of Squig",
      className: "text-xl sm:text-[30px]",
    },
    {
      text: "now",
      className: "text-xl sm:text-[50px] text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-300 to-gray-300 dark:from-black dark:to-gray-900">
      <div className="flex flex-col items-center justify-center h-[20rem] w-full px-4">
        <p className="text-gray-800 dark:text-gray-200 text-xl sm:text-[50px] m-4 text-center">
          Explore the simplicity and efficiency of Squig
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
          <button className="w-40 h-10 rounded-xl bg-black dark:bg-gray-700 border dark:border-gray-600 border-transparent text-white dark:text-gray-200 text-sm">
            Download now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white dark:bg-gray-800 text-black dark:text-gray-200 border border-black dark:border-gray-600 text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
