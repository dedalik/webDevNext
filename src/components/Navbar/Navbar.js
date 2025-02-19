"use client";

import { headerMenus } from "@/config/menus";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        >
          <Image
            alt="N"
            width="32"
            height="32"
            className="w-8"
            src="vercel.svg"
          />
          <span>WedDev Next</span>
        </Link>

        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
              href="/"
            >
              Get Started
            </Link>
          </div>
        </div>
        <button
          aria-label="Toggle Menu"
          className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
            ></path>
          </svg>
        </button>
        <div
          className={`lg:flex ${
            isMenuOpen ? "block" : "hidden"
          } text-center lg:items-center`}
        >
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {headerMenus.map(({ title, url }) => (
              <li key={title} className="mr-3 nav__item">
                <Link
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  href={url}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
