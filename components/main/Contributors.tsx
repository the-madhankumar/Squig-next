"use client";
import { useEffect } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";

export function Contributors() {


  const CARDS = [
  
    {
      id: 1,
      name: "Madhan Kumar M",
      designation: "Student Contributor",
      image : "https://avatars.githubusercontent.com/u/123907939?v=4",
      link : "https://github.com/the-madhankumar",
      // content: (
      //   <p>
      //     <Highlight>Madhan Kumar M</Highlight> is a contributor currently studying in the 3rd year. His contributions have been instrumental in the development and success of our project.
      //   </p>
      // ),
    },
    {
      id: 0,
      name: "Harish M",
      designation: "Student",
      link : "https://github.com/Harish-M-2003",
      image : "https://avatars.githubusercontent.com/u/124487595?v=4",
      // content: (
      //   <p>
      //     As the founder, <Highlight>Harish</Highlight> has led the way with vision and dedication. Currently in the 4th year of studies, he has played a pivotal role in shaping the project.
      //   </p>
      // ),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-[20em]">
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Contributors
      </div>
      {/* <CardStack items={CARDS} /> */}
      <div className="flex">
        <AnimatedTooltip items={CARDS}/>
      </div>
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 mt-0",
        className
      )}
    >
      {children}
    </span>
  );
};


