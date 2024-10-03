"use client";
import React, { useState, useCallback } from "react";
// import { Link } from "./LinkSection";

// interface LinkShortenerFormProps {
//   setLinks: Dispatch<SetStateAction<Link[]>>
// }

export const LinkShortenerForm = () => {
  const [link, setLink] = useState<string>("");
  // const [linksList, setLinksList] = useState([])
  // let linkList = []
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

  const shortenLinkFetch = async (url: string, apiKey: string) => {
    const endpoint = 'https://www.urlday.com/api/v1/links';
  
    const formData = new URLSearchParams();
    formData.append('url', url);
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'cors': 'no-cors',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${apiKey}`,  
        },
        body: formData.toString(), 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Link acortado:', result);
      return result;
    } catch (error) {
      console.error('Error acortando el link:', error);
      throw error;
    }
  };
  
  
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    shortenLinkFetch('https://brimvoid.com', '9Cl21FlWMEpXqE0rVBmuNSzTQp4MnjLZQC9F5My5XEeld9qxWE0GgAPPVvCa');
    // if (link.trim()) {
    //   console.log("Shortening link:", link);
    //   setSuccess(true); 
      
    // } else {
    //   setShowError(true); 
    // }
    // console.log('se envia')
    // const resp = await newShortenLink(link)
    // console.log('Respuesta: ', resp)
    
  };



  return (
    <div className="relative my-10">
      <form
        onSubmit={handleSubmit}
        className=" items-center bg-purple-700 bg-[url('/images/superior-bg-mobile.svg')] lg:bg-[url('/images/superior-bg-desktop.svg')] bg-cover bg-center p-4 lg:py-12 lg:px-4 rounded-lg w-10/12 mx-auto absolute -top-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="lg:flex">
          <input
            type="text"
            value={link}
            onChange={handleInputChange}
            placeholder="Enter your link here"
            className={`flex-grow px-2 py-3 mr-4 rounded w-full mb-4 lg:mb-0 ${
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
