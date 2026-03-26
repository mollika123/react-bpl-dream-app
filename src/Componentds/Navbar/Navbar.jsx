import React from 'react';
import dollerImg from "../../assets/dollar 1.png"
const Navbar = ({coin}) => {
  return (
    <div className="container mx-auto navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn flex justify-between items-center font-bold text-xl">{coin} Coins
  <img src={dollerImg} alt="" />
    </button>
  </div>
</div>
  );
};

export default Navbar;