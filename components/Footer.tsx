"use client";

import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-white py-4 px-8 md:px-24">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center mb-4 md:mb-0 md:items-start">
          <Link href="/">
            <Image src={Logo} alt="SNSV Logo" className="w-20 h-16" />
          </Link>
          <p className="text-xs mt-2">Phone: +88 88888</p>
          <p className="text-xs mt-2">Address: The Other Way, Earth</p>
          <p className="text-xs mt-2">
            &copy; {new Date().getFullYear()} SNSV. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link href="https://www.facebook.com/ASUS" title="facebook link">
            <FaFacebook size={25} />
          </Link>
          <Link href="https://twitter.com/ASUS" title="twitter link">
            <FaTwitter size={25} />
          </Link>
          <Link href="https://www.instagram.com/asus/" title="instagram link">
            <FaInstagram size={25} />
          </Link>
        </div>
        <button
          className="btn-anim bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full focus:outline-none flex items-center"
          onClick={handleBackToTop}
          title="back to top button"
        >
          <FaArrowUp className="mr-2" />
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
