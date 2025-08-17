"use client"
import React from 'react';
import PrimarySearchAppBar from "./(components)/Navbar/Navbar"
import NightSuit from "./(components)/night-suit/nightSuit"
import Home from "./(components)/HomePage/Home"
import MenPurse from './(components)/men-purse/menPurse';
import WomenPurse from './(components)/women-purse/womenPurse';
import Footer from "./(components)/Footer/Footer"
import Undergarments from './(components)/Undergarments/Undergarments';
import { useState } from 'react';

const HomePage = () => {
  const [name, setName] = useState<string | null>(null)
  
  // Function to render component based on state
const renderComponent = () => {
  switch (name) {
    case null:             // 👈 first render
    case 'Home':           // 👈 if you ever explicitly set Home
      return <Home />;     // ✅ show Home
    case 'Undergarments':
      return <Undergarments />;
    case 'Night Suit':
      return <NightSuit />;
    case 'Men Purse':
      return <MenPurse />;
    case 'Women Purse':
      return <WomenPurse />;
    default:
      return <Home />;     // ✅ fallback safety
  }
};

  
  return (
    <div>
      <PrimarySearchAppBar name={name} setName={setName} />
      <div>
       
        
        {/* Render component based on state */}
        {renderComponent()}
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
