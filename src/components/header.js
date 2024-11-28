// src/pages/welcome.js
import React from 'react';
import logo from "../images/logo.png";
import pp from "../images/pp.jpg";

const Header = () => {
  return (
    <header className="bg-[#4d5d53] h-[7vh] px-[10vw] justify-between  flex items-center">
        <div className="flex items-center">
        <img src={logo} className="size-[4vh] mr-2" alt="logo"></img>
        <h3 className="text-2xl font-medium text-[#d0f0bf]">ARCHIVER</h3>
        </div>
        <div className="flex">
        <img src={pp} className="size-[4vh] mr-2 rounded-full mt-1" alt="pp"></img>
        <button className="bg-white size-[5vh]"></button>
        </div>
      </header>
  );
};

export default Header;
