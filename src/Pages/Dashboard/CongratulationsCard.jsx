import React from "react";
import "./congratulate.css";

const CongratulationsCard = ({ totalProfit,color }) => {
  const total = totalProfit+1
  return (
    <div
      style={{
        visibility: totalProfit < 0 ? "collapse" : "visible",
        bottom: totalProfit < 0 ? "-100%" : "0%",
        zIndex: totalProfit < 0 ? -1 : 1,
      }}
      className="flex absolute left-0 w-[68%] transition-all flex-col items-end  "
    >
      <div style={{
        color:color.textColor,
        backgroundColor:color.cardBgColor
      }} className="card w-full  rounded-lg shadow ">
        <div className="flex w-full justify-between ">
          <div className="w-[60%] px-4  py-4">
            <h4 className="card-title text-lg mb-4 text-truncate">
              Congratulations John!{" "}
            </h4>
            <p className="mb-0 w-full py-4 opacity-70 font-thin tracking-wider ">
              You have done {total.toFixed(2)}% more sales today.
              <br /> Check your new raising badge in your profile.
            </p>
          </div>
          <div className="  w-[40%]  relative  justify-end items-end px-4">
            <img
              style={{
                bottom: totalProfit < 0 ? "-50%" : "0%",
                zIndex: totalProfit < 0 ? -1 : 1,
              }}
              src="/src/Images/illustration-john-2.png"
              className="card-img-position flex w-full absolute h-[130%]  object-cover "
              alt="View Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
