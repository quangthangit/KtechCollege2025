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
            href="/task-ssr"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            task-ssr
          </Link>
          <Link
            href="/task-ssg"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            task-ssg
          </Link>
          <Link
            href="/task-csr
"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            task-csr
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;