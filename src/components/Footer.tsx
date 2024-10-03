import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "app/utils/data";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-white p-8 lg:flex lg:items-start">
      <h3 className="text-2xl text-center font-extrabold mb-10 lg:w-3/12">
        <Link href={"/"}>Shortly</Link>
      </h3>

      <div className="sm:flex justify-around items-start lg:w-6/12">
        <div className="mb-8 space-y-4">
          <h4 className="font-bold text-center text-xl">Features</h4>
          <ul className="space-y-2 text-center">
            <Link href={"/features/link-shortening"}>
              <li>Link Shortening</li>
            </Link>
            <Link href={"/features/branded-links"}>
              <li>Branded Links</li>
            </Link>
            <Link href={"/features/analytics"}>
              <li>Analytics</li>
            </Link>
          </ul>
        </div>

        <div className="mb-8 space-y-4">
          <h4 className="font-bold text-center text-xl mb-4">Resources</h4>
          <ul className="space-y-2 text-center">
            <Link href={"/resources/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/resources/developers"}>
              <li>Developers</li>
            </Link>
            <Link href={"/resources/support"}>
              <li>Support</li>
            </Link>
          </ul>
        </div>

        <div className="mb-8 space-y-4">
          <h4 className="font-bold text-center text-xl mb-4">Company</h4>
          <ul className="space-y-2 text-center">
            <Link href={"/company/about"}>
              <li>About</li>
            </Link>
            <Link href={"/company/our-team"}>
              <li>Our Team</li>
            </Link>
            <Link href={"/company/careers"}>
              <li>Careers</li>
            </Link>
            <Link href={"/company/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex justify-between p-8 lg:w-3/12 lg:py-0 lg:px-12">
        {icons.map((icon) => (
          <Link href={icon.route} target="_blank">
            <Image
              key={icon.key}
              priority
              src={icon.src}
              width={31}
              height={31}
              alt={icon.alt}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};
