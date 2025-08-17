import React, { useState } from 'react'

interface CardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  isNew?: boolean
}

const Card = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  rating, 
  reviews, 
  isNew 
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddedToCart(true)
    setTimeout(() => setIsAddedToCart(false), 2000)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const discount = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 overflow-hidden hover:scale-105 hover:border-blue-500/50">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400 bg-opacity-20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 right-4 w-3 h-3 bg-purple-400 bg-opacity-20 rounded-full animate-bounce delay-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gray-700">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border ${
            isFavorite 
              ? 'bg-red-500 border-red-400 text-white scale-110' 
              : 'bg-gray-800/80 border-gray-600 text-gray-300 hover:bg-red-500 hover:border-red-400 hover:text-white hover:scale-110'
          }`}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="relative p-4 sm:p-6 space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-blue-400 font-medium uppercase tracking-wide">
            {category}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400">({reviews})</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-white font-bold text-sm sm:text-lg leading-tight group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddedToCart}
          className={`w-full py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
            isAddedToCart
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:shadow-lg'
          }`}
        >
          {isAddedToCart ? (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Added to Cart
            </>
          ) : (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-2.293-2.293c-.63-.63-.184-1.707.707-1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.4M9 9V6a3 3 0 116 0v3" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

export default Card
