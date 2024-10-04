"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenuModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  
  <div className="px-4 sm:px-6 w-full">
    <div className="bg-footer-bg rounded-lg p-6 w-11/12  text-center lg:hidden fixed z-50">
      
      <ul className="space-y-4 text-black">
        <Link href={"/features"} onClick={onClose}>
          <li className="text-white font-bold text-xl my-8">Features</li>
        </Link>
        <Link href={"/pricing"} onClick={onClose}>
          <li className="text-white font-bold text-xl my-8">Pricing</li>
        </Link>
        <Link href={"/resources"} onClick={onClose}>
          <li className="text-white font-bold text-xl my-8">Resources</li>
        </Link>
        <hr />
        <Link href={"/login"} onClick={onClose}>
          <li>
            <button className="mr-4 text-white font-bold text-xl my-8">Login</button>
          </li>
        </Link>
        <li>
          <button className="bg-teal-500 text-white font-bold text-xl py-4 px-6 rounded-full">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  </div>
  // </div>
);

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="flex justify-between items-center p-6 bg-white">
        <div className="flex items-center justify-between w-4/12">
          <h1 className="text-2xl font-bold text-black">
            <Link href={"/"} onClick={() => setShowMenu(false)}>Shortly</Link>
          </h1>
          <ul className="hidden space-x-4 lg:flex">
            <Link href={"/features"}>
              <li className="text-black">Features</li>
            </Link>
            <Link href={"/pricing"}>
              <li className="text-black">Pricing</li>
            </Link>
            <Link href={"resources"}>
              <li className="text-black">Resources</li>
            </Link>
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-center">
          <Link href={"/login"}>
            <button className="mr-4 text-black">Login</button>
          </Link>
          <button className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 checked:bg-teal-700">
            Sign Up
          </button>
        </div>

        <button
          className="block lg:hidden"
          aria-label="menu"
          aria-expanded={showMenu}
          onClick={handleMenuToggle}
        >
          <Image
            src="/images/menu-icon.png"
            alt="menu-icon"
            width={24}
            height={24}
            className="mx-auto"
          />
        </button>
      </nav>

      {showMenu && <MobileMenuModal onClose={handleMenuToggle} />}
    </>
  );
};
