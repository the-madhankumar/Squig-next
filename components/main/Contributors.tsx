"use client";

import { AnimatedTooltip } from "../ui/animated-tooltip";
import axios from "axios";
import { useEffect, useState } from "react";

export function Contributors() {
  const [contributors, setContributors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function updateContributors() {
    try {
      const response = await axios.get(
        "https://api.github.com/repos/Harish-M-2003/Squig-next/contributors"
      );
      setContributors(response.data);
    } catch (error) {
      console.error("Failed to fetch contributors:", error);
      setError("Failed to load contributors.");
      setContributors([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    updateContributors();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[10em] bg-gradient-to-b from-gray-300 dark:from-gray-900 dark:to-gray-900 my-0 py-0"> {/* Set my-0 and py-0 */}
      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
        Contributors
      </div>

      {loading ? (
        <div className="text-lg">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : contributors.length === 0 ? (
        <div className="text-lg">No contributors found.</div>
      ) : (
        <div className="flex">
          <AnimatedTooltip items={contributors} />
        </div>
      )}
    </div>
  );
}
