import Image from "next/image";
import React from "react";
import { ActionButton } from "./ActionButton";

export const HeroSection = () => {
  return (
    <section className="text-center py-4 px-6 lg:px-0 bg-white lg:flex lg:justify-between lg:items-center lg:pl-24">
      <div className="lg:order-2 mt-8 lg:mt-0">
        <Image
          src="/images/banner.svg"
          alt="Illustration showing link statistics"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>

      <div className="lg:order-1 lg:max-w-lg lg:text-left my-4 lg:px-10">
        <h2 className="text-4xl lg:text-6xl lg:font-bold font-extrabold mb-4 text-black">
          More than just shorter links
        </h2>
        <p className="mb-8 text-black text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <ActionButton label="Get Started" />
      </div>
    </section>
  );
};
