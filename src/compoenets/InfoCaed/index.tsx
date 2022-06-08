import React from "react";

interface props {
  total: number;
  percent: string;
}
const InfoCard = ({total, percent}: props) => {
  return <div className="flex justify-between items-center py-4">
    <div className="flex flex-col">
      <p className="text-mediumBrown text-base opacity-90 sm:text-lg">Total this month</p>
      <span className="text-darkBrown text-4xl font-bold">${total}</span>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-darkBrown text-sm font-bold">{percent}%</span>
      <p className="text-mediumBrown text-xs opacity-90 sm:text-sm">from last month</p>
    </div>
  </div>;
};

export default InfoCard;
