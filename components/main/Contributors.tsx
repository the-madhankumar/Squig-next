"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";

export function Contributors() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center w-full bg-gradient-to-b from-gray-300 via-gray-300 dark:from-gray-900 dark:via-gray-800">
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Contributors
      </div>
      <CardStack items={CARDS} />
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

const CARDS = [
  {
    id: 0,
    name: "Harish",
    designation: "Founder",
    content: (
      <p>
        As the founder, <Highlight>Harish</Highlight> has led the way with vision and dedication. Currently in the 4th year of studies, he has played a pivotal role in shaping the project.
      </p>
    ),
  },
  {
    id: 1,
    name: "Madhan Kumar M",
    designation: "Contributor",
    content: (
      <p>
        <Highlight>Madhan Kumar M</Highlight> is a contributor currently studying in the 3rd year. His contributions have been instrumental in the development and success of our project.
      </p>
    ),
  },
];
