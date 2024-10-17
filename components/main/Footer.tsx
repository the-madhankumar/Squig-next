import { useEffect, useState } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-all duration-500 my-0 py-0"> 
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text dark:from-green-300 dark:to-blue-500 mb-9">
          Explore the World with Squig
        </h2>
        <p className="text-lg md:text-2xl text-gray-900 dark:text-gray-300 mb-8">
          Tap into dynamic capabilities to visualize intricate data interactions, execute complex algorithms, and innovate using our dynamic{' '}
          <span className="text-blue-600 dark:text-green-400 font-bold italic">SQUIG</span> interface.
        </p>
      </div>
    </section>
  );
};

export default Footer;
