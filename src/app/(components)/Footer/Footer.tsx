import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform rotate-180">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(17 24 39)"/>
        </svg>
      </div>

    

      {/* Footer Content */}
      <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative mr-3">
                  <svg className="w-10 h-10 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="20" cy="20" r="1"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-bounce flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Shop
                  </span>
                  <span className="text-white ml-1">Smart</span>
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Experience the future of shopping with our curated collection of premium products. Fast, secure, and loved by thousands.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-xs rounded-full border border-blue-600 border-opacity-30">
                  Fast Delivery
                </span>
                <span className="px-3 py-1 bg-green-600 bg-opacity-20 text-green-400 text-xs rounded-full border border-green-600 border-opacity-30">
                  Secure Payment
                </span>
                <span className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-400 text-xs rounded-full border border-purple-600 border-opacity-30">
                  24/7 Support
                </span>
              </div>
            </div>

            

          

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Connect With Us
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +(92)3044015774
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                 megaonlinemallm.o.m@gmail.com
                </div>
               
              </div>

              {/* Social Media Icons */}
              <div>
                <p className="text-gray-300 text-sm mb-4">Follow us on social media:</p>
                <div className="flex space-x-4">
                 

                  {/* Instagram */}
                  <a href="https://www.instagram.com/megaonlinemallm.o.m?igsh=MTdoNmpjOGZxZW9zbA==" className="group relative">
                    <div className="w-10 h-10 bg-pink-600 bg-opacity-20 rounded-full flex items-center justify-center border border-pink-600 border-opacity-30 hover:bg-pink-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                      <svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>

                  

                  {/* Facebook */}
                  <a href="https://www.facebook.com/share/16CLXvor18/" className="group relative">
                    <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-blue-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                      <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

         

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <p>&copy; 2024 <a href="https://aliahmad.site/" className='text-blue-500'>Ali Ahmad</a>. All rights reserved.</p>
              </div>
              
           
          
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slow-spin {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer

