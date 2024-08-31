// 'use client';

// import { useTheme } from 'next-themes';
import Link from 'next/link';

export function Learn() {
  // const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1
        className={`text-center text-transparent h-[2.5em] bg-clip-text bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 lg:mb-10`}
      >
        Experience the Power of SQUIG: A Programming Language
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md sm:max-w-lg md:max-w-2xl text-center mb-6 sm:mb-8 lg:mb-10">
        Join the revolution and master the future of coding with SQUIG. A language designed to empower developers with simplicity, and unmatched capabilities.
      </p>
      <button className="relative  inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-white text-sm sm:text-base md:text-lg rounded-full shadow-2xl transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-800 dark:to-blue-800 dark:hover:from-purple-900 dark:hover:to-blue-900">
        <span className="absolute inset-0 w-full h-full bg-white opacity-10 rounded-full"></span>
        <span className="relative z-10"><Link href={"/index.html"}>Start Learning Now</Link></span>
      </button>
    </div>
  );
}
