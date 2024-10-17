"use client";
// import { useEffect } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
// import { CardStack } from "../ui/card-stack";
// import { cn } from "@/utils/cn";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export function Contributors() {

  const [contributors, setContributors] = useState<AxiosResponse[]>([]);
  const [loading, setLoading] = useState(true);

  async function updateContributors() {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/Harish-M-2003/Squig-next/contributors"
      );
      setContributors(response.data);

    } catch (error) {
      console.error("Failed to fetch contributors:", error);
      setContributors([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    updateContributors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[20em]">
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Contributors
      </div>

      {
        (loading) ?
          <></>
          :
          <div className="flex">
            <AnimatedTooltip items={contributors} />
          </div>
      }

    </div>
  );
}

// export const Highlight = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <span
//       className={cn(
//         "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 mt-0",
//         className
//       )}
//     >
//       {children}
//     </span>
//   );
// };


