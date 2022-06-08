import React from "react";
import ChartCard from "../ChartCard";
import InfoCard from "../InfoCaed";
import Line from "./Line";

const MainCard = () => {
  return (
    <section className="bg-white w-full rounded-2xl px-5 py-6 sm:px-10 sm:py-11">
      <h2 className="text-darkBrown text-2xl mb-6 sm:text-2xl">Spending - Last 7 days</h2>
      <div>
        <ChartCard />
      </div>
      <Line />
      <InfoCard total={478.33} percent={"+2.4"} />
    </section>
  );
};

export default MainCard;
