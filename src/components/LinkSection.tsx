"use client";
import React from "react";
import { LinkShortenerForm } from "./LinkShortenerForm";
import { AdvancedStatistics } from "./AdvancedStatistics";

export interface Link {
  original: string;
  shortened: string;
}

export const LinkSection = () => {
  // const [links, setLinks] = useState<Link[]>([]);
  // const dummyLinks = [
  //   { original: "https://brimvoid.com", shortened: "https://re.link/siduia" },
  //   { original: "https://brimvoid.com", shortened: "https://re.link/siduia" },
  // ];
  return (
    <section className="mx-auto bg-gray-100 max-w-maxxl">
      <LinkShortenerForm />

      <div className="bg-gray-100 pt-40 lg:pt-40 ">
        {/* {links.length > 0 && (
          <div className="mt-8 w-10/12 mx-auto">
            {links.map((link, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-white p-4 rounded mb-2"
              >
                <span className="text-black">{link.original}</span>
                <div className="flex space-x-4">
                  <a
                    href={link.shortened}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500"
                  >
                    {link.shortened}
                  </a>
                  <button className="bg-teal-500 text-white py-1 px-4 rounded">
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )} */}
        {/* <ShortenedLinksList links={linkToBeShorted} /> */}
        <AdvancedStatistics />
      </div>
    </section>
  );
};
