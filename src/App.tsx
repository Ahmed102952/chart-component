import React from "react";
import ReactDOM from "react-dom";
import BalanceCard from "./compoenets/BalanceCard";
import MainCard from "./compoenets/MainCard";

const App = () => {
  return (
    <div className="bg-veryPaleOrenge w-screen">
      <div className=" w-full max-w-xl h-screen grid place-items-center mx-auto px-4">
        <div className="flex flex-col w-full">
          <BalanceCard balance={"921.48"} />
          <MainCard />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
