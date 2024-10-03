import React from "react";
import { cardData } from "app/utils/data";
import { StatCard } from "./StatCard";

export const AdvancedStatistics = () => {
  return (
    <>
      <div className="p-6">
        <h3 className="text-center text-2xl font-bold mb-2 lg:mb-8 text-black">
          Advanced Statistics
        </h3>
        <p className="text-gray-500 text-center mb-12 lg:px-72 xl:px-96">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="lg:flex lg:justify-center lg:items-center text-gray-500 lg:px-10">
          {cardData.map((card, index) => (
            <StatCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              alt={card.alt}
              key={card.title}
              showDivider={index < 2}
              marginBottom={
                index === 0 ? "lg:mb-20" : index === 1 ? "lg:mb-10" : ""
              }
            />
          ))}
        </div>
      </div>

      <div className="bg-purple-950 text-white text-center overflow-hidden">
        <div className="relative z-10 bg-[url('/images/mobile-bg.svg')] lg:bg-[url('/images/desktop-bg.svg')] bg-cover bg-center py-10 text-center">
          <h2 className="text-2xl font-bold">Boost your links today</h2>
          <button className="bg-teal-400 text-white py-2 px-4 rounded-full mt-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};
