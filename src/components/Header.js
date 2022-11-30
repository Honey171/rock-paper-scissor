import React from 'react';
import logo from '../assets/logo.svg';

function Header({ score }) {
  return (
    <div className="min-w-[350px] md:min-w-[700px] flex justify-between items-center bg-transparent border-4 border-[#606e85] rounded-lg py-3 px-2">
      <img
        src={logo}
        alt=""
        className="w-28"
      />
      <div className="text-center bg-white py-4 px-8 rounded-lg">
        <p className="tracking-wider text-[#2a46c0]">SCORE</p>
        <span className="text-5xl text-gray-600">{score}</span>
      </div>
    </div>
  );
}

export default Header;
