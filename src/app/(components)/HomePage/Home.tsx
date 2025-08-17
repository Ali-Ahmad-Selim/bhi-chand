import React from 'react'
import New from "./New"
import Card from "./Card"
const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section with Dark Gradient Background */}
      <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0">
          {/* Floating Circles */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-blue-500 bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-white bg-opacity-3 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-1/3 w-10 sm:w-20 h-10 sm:h-20 bg-purple-500 bg-opacity-10 rounded-full animate-bounce delay-700"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-1/3 right-5 sm:right-10 transform rotate-45">
            <div className="w-8 sm:w-16 h-8 sm:h-16 bg-blue-400 bg-opacity-20 animate-spin"></div>
          </div>
          <div className="absolute bottom-1/3 left-8 sm:left-16 transform -rotate-12">
            <div className="w-6 sm:w-12 h-6 sm:h-12 bg-purple-400 bg-opacity-20 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-5xl mx-auto">
            
            {/* Main Shopping Icon */}
            <div className="mb-6 sm:mb-8 flex justify-center">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  <circle cx="9" cy="20" r="1"/>
                  <circle cx="20" cy="20" r="1"/>
                </svg>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Shop
              </span>{" "}
              <span className="text-white">
                Smart
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-light text-gray-300 px-4 sm:px-0">
              Experience the future of shopping with our curated collection of premium products
            </p>

            {/* card  */}
     
           
            {/* Feature Icons Row */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center mb-2 border border-gray-700">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Fast</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center mb-2 border border-gray-700">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Secure</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center mb-2 border border-gray-700">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Loved</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <button className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-full transition-all duration-300 text-sm md:text-base hover:scale-105 hover:shadow-2xl">
                <span className="flex items-center justify-center gap-2">
                  Start Shopping
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-full transition-all duration-300 text-sm md:text-base hover:scale-105 backdrop-blur-sm">
                Explore Categories
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(17 24 39)"/>
          </svg>
        </div>
      </div>
      
      {/* other sections */}


<New/>     
   
    </div>
  )
}

export default Home
