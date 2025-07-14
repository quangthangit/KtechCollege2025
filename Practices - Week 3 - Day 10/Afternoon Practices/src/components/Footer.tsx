import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm"> MyWebsite. All rights reserved.
        </p>
        <div className="space-x-4 mt-3 md:mt-0">
          <a href="/privacy" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
