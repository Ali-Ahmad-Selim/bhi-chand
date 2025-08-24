"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Home from "../HomePage/Home";

// Add interface for props
interface UrbanestNavbarProps {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

const navigationItems = [
  { label: "Home", path: "/home", value: "Home", emoji: "🏡" },
  { label: "Undergarments", path: "/undergarments", value: "Undergarments", emoji: "🩲" },
  { label: "Night Suit", path: "/night-suit", value: "Night Suit", emoji: "🛌" },
  { label: "Men Purse", path: "/men-purse", value: "Men Purse", emoji: "👜" },
  { label: "Women Purse", path: "/women-purse", value: "Women Purse", emoji: "👝" },
];

export default function UrbanestNavbar({ name, setName }: UrbanestNavbarProps) {
  const router = useRouter();

  const handleNavigation = (path: string, value: string | null) => {
    setName(value);
    console.log(`Navigating to: ${path}, Selected: ${value || "Home"}`);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const renderHome = () => {
    return <Home />;
  };

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-700 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Brand Logo */}
            <div className="flex-shrink-0" onClick={renderHome}>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-all duration-300 font-inter tracking-tight">
                Urbanest
              </h1>
            </div>

            {/* Navigation Links - Hidden on small screens, visible on sm and up */}
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 ml-2 sm:ml-4 lg:ml-8">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path, item.value)}
                  className={`
                    relative px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5 text-xs sm:text-sm lg:text-base font-bold rounded-lg sm:rounded-xl transition-all duration-300 font-inter
                    ${
                      name === item.value
                        ? "text-white bg-blue-600/25 shadow-lg shadow-blue-500/25 border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-blue-600/15 border border-transparent hover:border-blue-500/20"
                    }
                    hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20
                    active:transform active:translate-y-0
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 
                    after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-400 after:transform after:-translate-x-1/2
                    ${name === item.value ? "after:w-4/5" : "hover:after:w-4/5"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex-1"></div>

            {/* Desktop Right-Side: Cart + Login (no dropdowns) */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              {/* Shopping Cart (unchanged) */}
              <button className="relative p-2.5 lg:p-3 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 active:transform active:translate-y-0 group">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-gray-900 animate-pulse shadow-lg">
                  3
                </span>
              </button>

              {/* Login (replaces Profile/Logout) */}
              <button
                onClick={handleLogin}
                className="p-2.5 lg:p-3 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-green-600/20 hover:border-green-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 active:transform active:translate-y-0 group"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                </svg>
              </button>
            </div>

            {/* Mobile Top Right: Cart + Login (no hamburger) */}
            <div className="sm:hidden flex items-center space-x-2">
              {/* Mobile Cart (kept exactly as before) */}
              <button className="relative p-2.5 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-black rounded-full h-4 w-4 flex items-center justify-center border-2 border-gray-900 animate-pulse shadow-lg">
                  3
                </span>
              </button>

              {/* Mobile Login */}
              <button
                onClick={handleLogin}
                className="p-2.5 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Banner - Only visible on small screens */}
      <div className="sm:hidden bg-gray-800 border-b border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path, item.value)}
                  className={`
                    flex-shrink-0 px-3 py-2 text-xs font-bold rounded-lg transition-all duration-300 font-inter flex items-center space-x-1
                    ${
                      name === item.value
                        ? "text-white bg-blue-600/25 shadow-lg shadow-blue-500/25 border border-blue-500/30"
                        : "text-gray-300 hover:text-white hover:bg-blue-600/15 border border-transparent hover:border-blue-500/20"
                    }
                  `}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            {/* Right side kept with spacing; we already show cart+login in the top bar */}
            <div />
          </div>
        </div>
      </div>
    </>
  );
}
