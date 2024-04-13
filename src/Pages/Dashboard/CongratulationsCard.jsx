import React from 'react';

const CongratulationsCard = () => {
  return (
    <div className="flex flex-col items-end w-[50%] mt-md-5 mt-lg-4 pt-md-2 pt-lg-0">
      <div className="card w-full rounded-lg shadow-lg bg-[#312d4b] text-[#d4d4d4] ">
        <div className="flex flex-row">
          <div className="w-full md:w-1/2 p-4">
            <h4 className="card-title mb-4 text-truncate">Congratulations John! </h4>
            <p className="mb-0">You have done 72%  more sales today.<br /> Check your new raising badge in your profile.</p>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center items-end px-4">
            <img
              src="/src/Images/illustration-john-2.png"
              className="card-img-position h-[120%] absolute bottom-0 right-0 scaleX-n1-rtl"
              alt="View Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
