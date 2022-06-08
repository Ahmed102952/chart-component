import React, { useEffect, useLayoutEffect, useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import DATA from "../../../data.json";

const data = [...DATA];
const cor = {y: 0}

const ChartCard = () => {
  const [barSize, setBarSize] = useState(34);
  useEffect(() => {
    window.innerWidth >= 560 ? setBarSize(54) : setBarSize(34);
  });
  window.onresize = () =>
    window.innerWidth >= 560 ? setBarSize(54) : setBarSize(30);
  return (
    <ResponsiveContainer width="100%" height={160}>
      <BarChart data={data} barSize={barSize}>
        <Bar fill="#ec755d" dataKey="amount"  />
        <XAxis dataKey="day" axisLine={false} tickLine={false} />
        <Tooltip content={<CustomTooltip payload={[]} active={false} />} cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({payload, active} : {
  payload: any[];
  active: boolean
}) => {
  if(active) {
  return (
    <p className="text-white text-base w-fit bg-darkBrown rounded-sm p-1">${payload[0].value}</p>
  )
  }
  return null;
};

export default ChartCard;
