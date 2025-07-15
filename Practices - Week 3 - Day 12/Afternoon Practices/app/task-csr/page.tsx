import { ClientSideRendering } from "../components/ClientSideRendering";

import React from "react";

export default function Page() {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-gray-100 transition-colors duration-300">
        <div className="w-full h-full bg-white/90 rounded-none shadow-none p-6 flex-1">
          <div className="text-left font-bold text-2xl text-blue-700 mb-4">
            List task manager
          </div>
          <ClientSideRendering />
        </div>
      </div>

      <button className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white text-3xl rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
