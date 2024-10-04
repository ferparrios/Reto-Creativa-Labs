"use client";
import React, { useState } from "react";
import { LinkShortenerForm } from "./LinkShortenerForm";
import { AdvancedStatistics } from "./AdvancedStatistics";

export interface Link {
  original: string;
  shortened: string;
}

export const LinkSection = () => {
  const [links, setLinks] = useState<Link[]>([]);

  const addLink = (original: string, shortened: string) => {
    setLinks((prevLinks) => [...prevLinks, { original, shortened }]);
  };

  return (
    <section className="mx-auto bg-gray-100 max-w-maxxl">
      <LinkShortenerForm addLink={addLink} />

      <div className="bg-gray-100 pt-40 lg:pt-40">
        {links.length > 0 && (
          <div className="lg:mt-8 w-10/12 mx-auto">
            {links.map((link, idx) => (
              <div
                key={idx}
                className="lg:flex lg:justify-between lg:items-center bg-white p-4 rounded mb-2 space-y-2"
              >
                <span className="text-black line-clamp-3">{link.original}</span>
                <div className="lg:flex space-x-4 lg:items-center space-y-4 lg:space-y-0">
                  <a
                    href={link.shortened}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 line-clamp-3 lg:line-clamp-none"
                  >
                    {link.shortened}
                  </a>
                  <button className="bg-teal-500 text-white py-1 rounded w-10/12 lg:w-28">
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <AdvancedStatistics />
      </div>
    </section>
  );
};
