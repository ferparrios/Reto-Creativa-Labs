import React from 'react';

interface Link {
  original: string;
  shortened: string;
}

export const ShortenedLinksList: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className="mt-8 w-10/12 mx-auto">
      {links.map((link, idx) => (
        <div key={idx} className="flex justify-between items-center bg-white p-4 rounded mb-2">
          <span className='text-black'>{link.original}</span>
          <div className="flex space-x-4">
            <a href={link.shortened} target="_blank" rel="noopener noreferrer" className="text-teal-500">{link.shortened}</a>
            <button className="bg-teal-500 text-white py-1 px-4 rounded">Copy</button>
          </div>
        </div>
      ))}
    </div>
  );
};
