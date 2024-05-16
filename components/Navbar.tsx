"use client";

import Logo from "@/public/logo.svg";
import navItems from "../utils/navItems";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMobile, setMobile] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-between items-center px-8 py-4 bg-gray-950">
      <Link href="https://www.asus.com" className="h-fit">
        <Image className="w-32 h-auto object-cover" src={Logo} alt="logo" />
      </Link>

      <button
        onClick={() => setMobile(!isMobile)}
        className="btn-anim p-2 rounded-lg hover:bg-gray-800 md:hidden"
        title="menu button"
      >
        <RxHamburgerMenu size={25} className="text-white" />
      </button>

      <div className={`${!isMobile && "hidden"} w-full md:w-auto md:block`}>
        <ul className="flex flex-col p-4 text-lg text-white md:flex-row md:space-x-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`p-1 hover:bg-gray-600 md:hover:bg-transparent ${
                pathname === item.path ? "font-extrabold" : ""
              }`}
            >
              <Link href={item.path} className="hover:text-blue-500">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
