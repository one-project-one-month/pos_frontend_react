import React from "react";
import "./congratulate.css";

const CongratulationsCard = ({ totalProfit, color }) => {
  const total = totalProfit + 1;
  return (
    <div className="flex absolute left-0 w-[68%] transition-all flex-col items-end  ">
      <div
        style={{
          color: color.textColor,
          backgroundColor: color.cardBgColor,
        }}
        className="card w-full  rounded-lg shadow "
      >
        <div className="flex w-full justify-between ">
          <div className="w-[60%] px-4  py-4">
            <h4 className="card-title text-lg mb-4 text-truncate">
              {totalProfit < 0 ? " Hey Jhon! " : "Congratulations John!"}
            </h4>

            {totalProfit < 0 ? (
              <h4 className="mb-0 text-lg w-full py-4 opacity-70 font-thin tracking-wider ">
                Keep it up.
                <br /> You're doing great!
              </h4>
            ) : (
              <p className="mb-0 w-full py-4 opacity-70 font-thin tracking-wider ">
                You have done{" "}
                <span className=" font-medium "
                  style={{
                    color: color.upTrendColor,
                    backgroundColor: color.cardBgColor,
                  }}
                >
                  {total.toFixed(2)}%
                </span>{" "}
                more sales today.
                <br /> Check your new raising badge in your profile.
              </p>
            )}
          </div>
          <div className="  w-[40%]  relative  justify-end items-end px-4">
            <img
              src="https://github.com/lizzy-km/pos_frontend_react/blob/main/src/Images/illustration-john-2.png?raw=true"
              className="card-img-position flex w-full bottom-0 absolute h-[130%]  object-cover "
              alt="View Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
