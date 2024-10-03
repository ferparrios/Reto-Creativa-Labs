import Image, { StaticImageData } from "next/image";
import React from "react";

interface StatCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
  alt: string;
  showDivider?: boolean;
  marginBottom?: string;
}

export const StatCard = ({
  icon,
  title,
  description,
  alt,
  showDivider,
  marginBottom,
}: StatCardProps) => (
  <>
    <div
      className={`relative text-center p-4 lg:w-3/12 bg-white shadow-lg rounded-lg ${marginBottom}`}
    >
      <div className="absolute -top-8 left-1/2 lg:left-20 transform -translate-x-1/2">
        <Image
          src={icon}
          alt={alt}
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>
      <h4 className="font-bold mb-2 mt-12 lg:text-left">{title}</h4>
      <p className="lg:text-sm lg:text-left">{description}</p>
    </div>
    {showDivider && (
      <div className="bg-teal-400 w-2 h-20 mx-auto lg:w-10 lg:h-2 lg:mx-0"></div>
    )}
  </>
);
