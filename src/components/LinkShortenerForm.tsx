"use client";
import { newShortenLink } from "app/api/shotLinksApi";
import React, { useState, useCallback } from "react";

export const LinkShortenerForm = ({
  addLink,
}: {
  addLink: (original: string, shortened: string) => void;
}) => {
  const [link, setLink] = useState<string>("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLink(e.target.value);
      setShowError(false);
      setSuccess(false);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!link) {
      setShowError(true);
      return;
    }

    try {
      const resp = await newShortenLink({
        url: link,
      });

      console.log(resp);

      if (resp && resp.data) {
        // console.log("Shortened link:", resp.data.short_url);

        addLink(link, resp.data.short_url);

        setSuccess(true);
        setLink("");
      } else {
        console.log("Error: No response data");
      }
    } catch (error) {
      console.error("Error shortening link:", error);
      setShowError(true);
    }
  };

  return (
    <div className="relative my-10">
      <form
        onSubmit={handleSubmit}
        className="items-center bg-purple-700 bg-[url('/images/superior-bg-mobile.svg')] lg:bg-[url('/images/superior-bg-desktop.svg')] bg-cover bg-center p-4 lg:py-12 lg:px-4 rounded-lg w-10/12 mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="lg:flex">
          <input
            type="text"
            value={link}
            onChange={handleInputChange}
            placeholder="Enter your link here"
            className={`flex-grow text-black px-2 py-3 mr-4 rounded w-full mb-4 lg:mb-0 ${
              showError
                ? "border border-red-500"
                : success
                ? "border border-green-500"
                : ""
            }`}
          />

          <button
            type="submit"
            className="bg-teal-400 text-white py-2 px-4 lg:py-3 rounded-lg w-full font-extrabold lg:w-1/6"
          >
            Shorten It!
          </button>
        </div>

        {showError && <p className="text-red-500">Please add a link</p>}
      </form>
    </div>
  );
};
