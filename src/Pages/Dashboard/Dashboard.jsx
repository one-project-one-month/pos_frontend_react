import CongratulationsCard from "./CongratulationsCard";
import SummaryCards from "./SummaryCards";
import TotalProfit from "./TotalProfit";
import "./dashboard.css";

import "./utils";





const Dashboard = () => {
  

  return (
    <section className=" dashBoardSection  ">
        <div className=" flex w-full justify-between items-center " >
        <CongratulationsCard/>
        <SummaryCards/>
        </div>
        
      <div className=" flex dashBoardCard text-[#e6e6eb] bg-[#312d4b] rounded-md p-4  w-full h-full ">
        <div className=" flex justify-start items-start p-2 w-[50%] ">
          <TotalProfit/>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
