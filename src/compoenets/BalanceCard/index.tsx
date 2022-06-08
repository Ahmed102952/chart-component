import React from "react";
import img from "../../../images/logo.svg";

const BalanceCard = ({balance}: {balance: string;}) => {
    return (
        <section className="w-full px-5 py-6 bg-softRed rounded-2xl flex justify-between items-center mb-4 sm:px-10 sm:mb-6">
            <div className="flex flex-col">
                <p className="text-white text-base opacity-75 sm:text-xl">My balance</p>
                <span className="text-white text-2xl sm:text-2xl">${balance}</span>
            </div>
            <div className="w-[64px] h-[44px]">
                <img src={img as string} alt="logo" />
            </div>
        </section>
    )
}

export default BalanceCard;