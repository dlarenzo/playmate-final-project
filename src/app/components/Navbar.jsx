import React from "react";
import { Link } from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";

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
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container flex justify-between items-center mx-auto px-4 py-2 lg:py-4 ">
        {/* <Link href="/">
          <Image
            src="/images/logo.avif"
            // width={500}
            // height={500}
            alt="playmate logo"
          />
        </Link> */}
        LOGO
        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md: flex-row md:space-x-8 mt-0">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Collection</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Other Pages</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
