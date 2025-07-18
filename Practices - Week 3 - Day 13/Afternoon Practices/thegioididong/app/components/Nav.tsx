"use client"

import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black shadow-md">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center space-x-4">
            <img src="logo_url" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl tracking-tight">thegioididong</span>
            <div className="hidden md:flex items-center rounded-md overflow-hidden border border-gray-200 bg-white">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="p-2 text-sm focus:outline-none w-40 lg:w-64"
              />
              <button className="bg-gray-100 p-2 hover:bg-gray-200 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-gray-700 transition font-medium">Đăng nhập</a>
              <a href="#" className="hover:text-gray-700 transition font-medium">Giỏ hàng</a>
              <a href="#" className="hover:text-gray-700 transition font-medium">Hồ Chí Minh</a>
            </div>
            <button
              className="md:hidden text-2xl focus:outline-none hover:text-gray-700 transition"
              onClick={toggleMenu}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <div
            className={`w-full md:w-auto md:flex md:items-center ${isMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}
          >
            <div className="grid grid-cols-2 md:flex md:space-x-3 gap- text-sm">
              {[
                { icon: "📱", text: "Điện thoại" },
                { icon: "💻", text: "Laptop" },
                { icon: "🎧", text: "Phụ kiện" },
                { icon: "⌚", text: "Smartwatch" },
                { icon: "📟", text: "Đồng hồ" },
                { icon: "📱", text: "Tablet" },
                { icon: "💿", text: "Máy cũ, Thu cũ" },
                { icon: "📷", text: "Màn hình, Máy in" },
                { icon: "📡", text: "Sim, Thẻ cào" },
                { icon: "🔧", text: "Dịch vụ tiện ích" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-1 px-2 py-2 rounded-md hover:bg-yellow-200 transition"
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;