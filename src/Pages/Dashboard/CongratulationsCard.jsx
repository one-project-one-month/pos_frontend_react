import React from 'react';

const CongratulationsCard = ({totalProfit}) => {
  return (
    <div className="flex flex-col items-end w-[60%] ">
      <div className="card w-full  rounded-lg shadow-lg bg-[#312d4b] text-[#d4d4d4] ">
        <div className="flex w-full justify-between ">
          <div className="w-[60%] px-4  py-4">
            <h4 className="card-title text-lg mb-4 text-truncate">Congratulations John! </h4>
            <p className="mb-0 w-full py-4 opacity-70 font-thin tracking-wider ">You have done {totalProfit.toFixed(2)}%  more sales today.<br /> Check your new raising badge in your profile.</p>
          </div>
          <div className=" w-[40%]  relative flex justify-end items-end px-4">
            <img
              src="/src/Images/illustration-john-2.png"
              className="card-img-position w-full h-[130%] object-cover absolute bottom-0 right-0 scaleX-n1-rtl"
              alt="View Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
