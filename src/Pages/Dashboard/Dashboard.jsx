import CongratulationsCard from "./CongratulationsCard";
import SummaryCards from "./SummaryCards";
import TotalProfit from "./TotalProfit";
import "./dashboard.css";
import Icon from '@mdi/react';


import "./utils";


import {  useSelector,useDispatch } from "react-redux";
import { mdiRefresh, mdiRefreshCircle, mdiSync } from "@mdi/js";
import { setRender } from "../../redux/services/animateSlice";



const Dashboard = () => {

    const { totalProfit } = useSelector((state) => state.authSlice);
    const { reRender } = useSelector((state) => state.animateSlice);


    const dispatch = useDispatch()

  

  return (
    <section className=" dashBoardSection  ">

        <div onClick={()=> dispatch(setRender(reRender+1))}  className=" shadow-sm bg-[#312d4b] justify-between items-center px-2 py-1 rounded-md flex gap-2 text-[#d4d4d4] cursor-pointer  " >

        <p>Refresh</p>
        <Icon path={mdiSync} size={.8} color={'#e6e6eb'} />
        
        </div>



        <div className=" relative flex w-full justify-end items-end gap-3 h-[400px]  " >

          <CongratulationsCard  totalProfit={totalProfit}/>
            
       
        <SummaryCards/>
        </div>
        
      <div className=" flex dashBoardCard  text-[#e6e6eb] bg-[#312d4b] rounded-md p-4  w-full h-full ">
        <div className=" flex justify-start items-start p-2 w-[50%] ">
          <TotalProfit/>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
