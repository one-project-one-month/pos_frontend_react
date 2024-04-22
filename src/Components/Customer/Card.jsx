import React from "react";
import { useSelector } from "react-redux";

import { FaUser, FaUserPlus, FaUserCheck, FaUserClock } from "react-icons/fa";

export const StackCardOne = () => {
  const {
    bgColor,
    textColor,
    textColorDim,
    buttonColor,
    borderColor,
    shadowColor,
    upTrendColor,
    downTrendColor,
    cardBgColor,
    iconBgColor,
    iconColor,
  } = useSelector((state) => state.animateSlice);
  return (
    <div
      className={`card  rounded-lg overflow-hidden shadow-md bg-[${cardBgColor}]`}
    >
      <div style={{
              color:textColor
            }} className="card-inner p-5">
        <div className="flex justify-between">
          <div className="card-info">
            <h3 className="title">Session</h3>
            <div className="users flex items-center space-x-1">
              <p className="number text-2xl font-semibold">21,459</p>
              <p
                style={{
                  color: upTrendColor,
                }}
                className={``}
              >
                (+29%)
              </p>
            </div>
            <div style={{
              color:textColor
            }} className="text">Total Users</div>
          </div>
          <div
            className={`icon bg-[${iconBgColor}] rounded-md size-10 flex items-center justify-center`}
          >
            <FaUser className={`text-[${iconColor}] text-lg `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackCardTwo = () => {
  const {
    bgColor,
    textColor,
    textColorDim,
    buttonColor,
    borderColor,
    shadowColor,
    upTrendColor,
    downTrendColor,
    cardBgColor,
    iconBgColor,
    iconColor,
  } = useSelector((state) => state.animateSlice);

  return (
    <div
      className={`card  rounded-lg overflow-hidden shadow-md bg-[${cardBgColor}]`}
    >
      <div style={{
              color:textColor
            }} className="card-inner p-5">
        <div className="flex justify-between">
          <div className="card-info">
            <h3 style={{
              color:textColor
            }} className="title">Paid Users</h3>
            <div className="users flex items-center space-x-1">
              <p style={{
              color:textColor
            }} className="number text-2xl font-semibold">4,567</p>
              <p
                style={{
                  color: upTrendColor,
                }}
                className={``}
              >
                (+48%)
              </p>
            </div>
            <div style={{
              color:textColor
            }} className="text">Last week analytics</div>
          </div>
          <div
            className={`icon bg-[${iconBgColor}] rounded-md size-10 flex items-center justify-center`}
          >
            <FaUserPlus className={`text-[${iconColor}] text-xl `} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackCardThree = () => {
  const {
    bgColor,
    textColor,
    textColorDim,
    buttonColor,
    borderColor,
    shadowColor,
    upTrendColor,
    downTrendColor,
    cardBgColor,
    iconBgColor,
    iconColor,
  } = useSelector((state) => state.animateSlice);

  return (
    <div style={{
      color:textColor
    }}
      className={`card  rounded-lg overflow-hidden shadow-md bg-[${cardBgColor}]`}
    >
      <div className="card-inner p-5">
        <div className="flex justify-between">
          <div className="card-info">
            <h3 className="title">Active Users</h3>
            <div className="users flex items-center space-x-1">
              <p className="number text-2xl font-semibold">19,459</p>
              <p
                style={{
                  color: downTrendColor,
                }}
              >
                (-29%)
              </p>
            </div>
            <div className="text">Last week analytics</div>
          </div>
          <div
            className={`icon bg-[${iconBgColor}] rounded-md size-10 flex items-center justify-center`}
          >
            <FaUserCheck
              style={{
                color: iconColor,
              }}
              className={` text-xl `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackCardFour = () => {
  const {
    bgColor,
    textColor,
    textColorDim,
    buttonColor,
    borderColor,
    shadowColor,
    upTrendColor,
    downTrendColor,
    cardBgColor,
    iconBgColor,
    iconColor,
  } = useSelector((state) => state.animateSlice);

  return (
    <div style={{
      color:textColor
    }}
      className={`card  rounded-lg overflow-hidden shadow-md bg-[${cardBgColor}]`}
    >
      <div className="card-inner p-5">
        <div className="flex justify-between">
          <div className="card-info">
            <h3 className="title">Pending Users</h3>
            <div className="users flex items-center space-x-1">
              <p className="number text-2xl font-semibold">237</p>
              <p className={`text-[${upTrendColor}]`}>(+47%)</p>
            </div>
            <div className="text">Last week analytics</div>
          </div>
          <div
            className={`icon bg-[${iconBgColor}] rounded-md size-10 flex items-center justify-center`}
          >
            <FaUserClock className={`text-[${iconColor}] text-xl `} />
          </div>
        </div>
      </div>
    </div>
  );
};
