import React from 'react'

const Feature = () => {
  return (
     <div className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">We're committed to providing you with the best shopping experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 mx-4 sm:mx-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Premium Quality</h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">Handpicked products that meet our highest standards of quality and craftsmanship</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 mx-4 sm:mx-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Best Value</h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">Competitive pricing with exclusive deals and member-only discounts</p>
            </div>
            
            <div className="text-center p-6 sm:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 mx-4 sm:mx-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">Express delivery options to get your orders to you as quickly as possible</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Feature