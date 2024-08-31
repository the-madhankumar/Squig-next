import cards from "@/data/evalutiondetails.config";
// import React from "react";

const EvolutionSection = () => {
  
  // const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-full">
          <h2 className={`text-center text-transparent h-[1.5em] bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold `}>
              Evolution of Squig
          </h2>
          <p className="text-lg text-gray-300">
            Over three years, Squig has evolved significantly, facing challenges and embracing innovation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 m-10 my-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 bg-gray-900 rounded-lg `}
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(-1)}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default EvolutionSection;
