"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import MenuOverlay from "./MenuOverlay";
import {
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Collection",
    href: "/collections",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Other Pages",
    href: "/pages",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="container flex justify-between items-center mx-auto px-4 py-2 lg:py-4 ">
        <Link href="/">
          <Image
            src="/images/logo.avif"
            width={150}
            height={150}
            alt="playmate logo"
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-155 w-15" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-15 w-15" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex mr-4">
          <HeartIcon className="h5 w-5 mr-4" />
          <ShoppingCartIcon className="h5 w-5" />
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
