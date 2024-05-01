import Icon from "@mdi/react";
import { mdiCurrencyUsd, mdiTrendingUp } from "@mdi/js";
import { useSelector } from "react-redux";

const SummaryCard = ({ title, icon, value, delta, color, sumColor }) => {
  
  return (
    <div
      style={{
        backgroundColor: sumColor.cardBgColor,
      }}
      className="flex h-[100%]   flex-col  w-[50%] shadow px-3 py-4 rounded-md "
    >
      <div className="flex items-center justify-between mb-4">
        <div className="avatar">
          <div
            style={{
              backgroundColor: color,
            }}
            className={` rounded-full p-1  shadow `}
          >
            {icon}
          </div>
        </div>
        {/* <div className="dropdown flex w-full justify-between gap-2 ">
          <button
            className="btn p-0"
            type="button"
            id={`dropdown-${title}`}
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="mdi mdi-dots-vertical mdi-24px"></i>
          </button>
          <div
            className="dropdown-menu flex w-full justify-between items-center dropdown-menu-end"
            aria-labelledby={`dropdown-${title}`}
          >
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Refresh
            </a>
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Share
            </a>
            <a className="dropdown-item waves-effect" href="javascript:void(0);">
              Update
            </a>
          </div>
        </div> */}
      </div>
      <h6 className="mb-2 text-xl font-medium ">{title}</h6>
      <div className="flex flex-wrap mb-2 pb-1 gap-2 items-center">
        <h4 className=" text-lg font-semibold ">{value}</h4>
        <small
          style={{
            color: color,
          }}
          className={`text-${color} font-medium text-pretty mt-1`}
        >
          {delta}
        </small>
      </div>
      <small className=" text-sm tracking-wider font-thin ">{`Daily ${title}`}</small>
    </div>
  );
};

const SummaryCards = ({ sumColor }) => {
  const { totalProfit, totalDailyProfit, totalMonthlyProfit, cash, wallet,income,expense } =
    useSelector((state) => state.authSlice);
    console.log(income[5]);
  return (
    <div
      style={{
        color: sumColor.textColor + "d2",
      }}
      className="flex w-[30%]  gap-2  h-full  justify-end items-end"
    >
      <SummaryCard
        title="Transactions"
        icon={<Icon path={mdiTrendingUp} size={1} color={"white"} />}
        value={cash[1] + wallet[1] + "k"}
        delta={(((cash[1] + wallet[1])/60)*100).toFixed(2) + "%"}
        color="#5356FF"
        sumColor={sumColor}
      />
      <SummaryCard
        title="Revenue"
        icon={<Icon path={mdiCurrencyUsd} size={1} color={"white"} />}
        value={income[5]-expense[5] + "k"}
        delta={totalProfit.toFixed(2) + "%"}
        color={totalProfit < 0 ? '#E2423B': "#74E291"}
        sumColor={sumColor}
      />
    </div>
  );
};

export default SummaryCards;
