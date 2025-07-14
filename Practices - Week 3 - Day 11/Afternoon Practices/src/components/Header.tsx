import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyLogo
        </Link>
        <nav className="space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Blog
          </Link>
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
