import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex flex-col p-4 gradient-bg-footer md:justify-center justify-between items-center ">
        <div className="w-full flex-col justify-between items-center flex sm:flex-row  my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <img src={logo} alt="logo" className="w-32" />
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://www.coinbase.com/wallet">Wallets</a></p>
                <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://www.binance.com/">Exchange</a></p>
                <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://coinmarketcap.com/" >Market</a></p>
                <p className="text-white text-base text-center mx-2 cursor-pointer"><a href="https://www.coinbase.com/learn/tips-and-tutorials">Tutorials</a></p>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Join the trend and hear for the unexpected miracle</p>
            <p className="text-white text-sm text-center font-medium mt-2">ethereum.org</p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3 mb-1">
            <p className="text-white text-left text-xs">@nilesh283</p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;