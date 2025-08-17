"use client"
import * as React from 'react';
import Home from "../HomePage/Home"


// Add interface for props
interface UrbanestNavbarProps {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

const navigationItems = [
  { label: 'Home', path: '/home', value: 'Home', emoji: '🏡' },
  { label: 'Undergarments', path: '/undergarments', value: 'Undergarments', emoji: '🩲' },
  { label: 'Night Suit', path: '/night-suit', value: 'Night Suit', emoji: '🛌' },
  { label: 'Men Purse', path: '/men-purse', value: 'Men Purse', emoji: '👜' },
  { label: 'Women Purse', path: '/women-purse', value: 'Women Purse', emoji: '👝' },

];


export default function UrbanestNavbar({ name, setName }: UrbanestNavbarProps) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const profileMenuRef = React.useRef<HTMLDivElement>(null);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsProfileMenuOpen(false);
  };

  const handleNavigation = (path: string, value: string | null) => {
    setName(value);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    console.log(`Navigating to: ${path}, Selected: ${value || 'Home'}`);
  };

  // Close menus when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                    ${name === item.value 
                      ? 'text-white bg-blue-600/25 shadow-lg shadow-blue-500/25 border border-blue-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-blue-600/15 border border-transparent hover:border-blue-500/20'
                    }
                    hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20
                    active:transform active:translate-y-0
                    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 
                    after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-400 after:transform after:-translate-x-1/2
                    ${name === item.value ? 'after:w-4/5' : 'hover:after:w-4/5'}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex-1"></div>

            {/* Desktop Icons - Hidden on small screens */}
            <div className="hidden sm:flex items-center space-x-2 lg:space-x-4">
              {/* Shopping Cart */}
              <button className="relative p-2.5 lg:p-3 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 active:transform active:translate-y-0 group">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-gray-900 animate-pulse shadow-lg">
                  3
                </span>
              </button>

            

              {/* Profile */}
              <div className="relative" ref={profileMenuRef}>
                <button 
                  onClick={handleProfileMenuToggle}
                  className="p-2.5 lg:p-3 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 active:transform active:translate-y-0 group"
                >
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-gray-800/95 backdrop-blur-xl border border-gray-600/50 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <div className="py-3">
                      <button className="w-full px-5 py-3 text-left text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-300 flex items-center space-x-3 font-inter font-semibold group">
                        <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>Profile</span>
                      </button>
                      <button className="w-full px-5 py-3 text-left text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 flex items-center space-x-3 font-inter font-semibold group">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">🚪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Icons and Hamburger - Only visible on small screens */}
            <div className="sm:hidden flex items-center space-x-2">
              {/* Mobile Cart */}
              <button className="relative p-2.5 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-black rounded-full h-4 w-4 flex items-center justify-center border-2 border-gray-900 animate-pulse shadow-lg">
                  3
                </span>
              </button>

            

              {/* Hamburger Menu Button */}
              <div className="relative" ref={mobileMenuRef}>
                <button 
                  onClick={handleMobileMenuToggle}
                  className="p-2.5 text-gray-300 bg-gray-800/60 border border-gray-600/50 rounded-xl hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                {/* Mobile Account Dropdown - Only Account related items */}
                {isMobileMenuOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-gray-800/95 backdrop-blur-xl border border-gray-600/50 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <div className="py-3">
                      {/* User Actions */}
                      <div className="px-4 py-2">
                        <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Account</h3>
                      </div>

                      {/* Profile */}
                      <button className="w-full px-5 py-3 text-left text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-300 flex items-center space-x-3 font-inter font-semibold group">
                        <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        <span>My Profile</span>
                      </button>


                      {/* Logout */}
                      <button className="w-full px-5 py-3 text-left text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 flex items-center space-x-3 font-inter font-semibold group">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">🚪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
                    ${name === item.value 
                      ? 'text-white bg-blue-600/25 shadow-lg shadow-blue-500/25 border border-blue-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-blue-600/15 border border-transparent hover:border-blue-500/20'
                    }
                  `}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

