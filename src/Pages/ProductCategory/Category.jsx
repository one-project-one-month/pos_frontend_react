import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { exportSettingOn, pageOn, setPageNum } from "../../redux/services/animateSlice";
import { PiExportThin } from "react-icons/pi";
import { RiAddLine } from "react-icons/ri";

const Category = () => {
  const { page, exportSet, addCat, pageNum } = useSelector(
    (state) => state.animateSlice
  );
  const dispatch = useDispatch();

  const pageCount = [7, 10, 20, 50, 70, 100];

  return (
    <div className=" flex flex-col text-[#ffffff] gap-3 absolute right-10 w-[75%] top-[50px] h-auto justify-between items-start p-2 rounded-md bg-[#312d4b]">
      <div className=" flex justify-between items-center w-full h-auto p-1 ">
        <div className=" border-2 px-2  border-[#76728e] flex justify-center items-center rounded-md w-[20%] h-[40px] ">
          <input
            placeholder="Search Category"
            className=" outline-none rounded-md bg-transparent w-full h-full "
            type="text"
            name=""
            id=""
          />
        </div>
        <div className=" relative flex justify-between items-center w-[40%] h-[45px] p-1 ">
         <>
         <div
            onClick={() => {
              dispatch(pageOn({ page: !page }));
            }}
            className=" cursor-pointer flex justify-around items-center rounded w-[15%] h-full border border-[#76728e] "
          >
            <p>{pageNum}</p>
            <TiArrowSortedDown
              className=" transition-all text-lg "
              style={{
                rotate: page === true ? "360deg" : "270deg",
              }}
            />
          </div>

          <div  onClick={() => {
              dispatch(exportSettingOn({ exportSet:!exportSet }));
            }} className=" flex justify-evenly tracking-wider items-center text-[#6c6d7b] font-medium  bg-[#3f3c57] cursor-pointer w-[30%] h-full rounded " >
          <PiExportThin className=" text-lg " />

            <p className=" text-sm  " >EXPORT</p>

            <TiArrowSortedDown
              className=" transition-all text-lg "
              style={{
                rotate: exportSet === true ? "360deg" : "270deg",
              }}
            />

          </div>

          <div className=" flex justify-between px-2 items-center  bg-[#9055fd] cursor-pointer w-[35%] h-full rounded " >
              <RiAddLine className=" text-lg " />
              <p className=" font-semibold text-[15px] tracking-wide " >ADD CATEGORY</p>
            </div>

         </>
         



          {/* Page Count  */}
          <div
            style={{
              visibility: page === true ? "visible" : "collapse",
            }}
            className=" shadow-lg   flex flex-col justify-center items-center gap-3 absolute w-[15%] h-auto  rounded-md bg-[#312d4b]  top-[100%] "
          >
            {pageCount.map((num) => {
              return (
                <p
                  style={{
                    backgroundColor:
                      num === pageNum ? "#16b1ff" : "transparent",
                  }}
                  onClick={() => {
                    dispatch(setPageNum({ pageNum: num }));
                    dispatch(pageOn({ page: !page }));
                  }}
                  className=" p-2 rounded w-full justify-center text-center cursor-pointer "
                  key={num}
                >
                  {" "}
                  {num}{" "}
                </p>
              );
            })}
          </div>
          {/* Page Count  */}

          {/* Export  */}
          <div
            style={{
              visibility: exportSet === true ? "visible" : "collapse",
            }}
            className="  flex flex-col justify-center items-center gap-3 absolute shadow-lg w-[25%] h-[150px] rounded bg-[#312d4b]  left-[25%] top-[100%] "
          >
           
          </div>

          {/* Export  */}


        </div>
      </div>

      <table className="table w-full shadow-md rounded-lg overflow-hidden">
  <thead className="bg-[#3f3c57]">
    <tr>
      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-[#ffffff] w-4"></th>
      <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-[#ffffff] w-4">
        <input type="checkbox" className="form-check-input h-4 w-4 border border-gray-300 rounded bg-gray-white focus:outline-none focus:ring-primary-500"/>
      </th>
      <th scope="col" className="px-4 py-2 text-left text-sm font-medium text-[#ffffff]">
        Categories
        
      </th>
      <th scope="col" className="px-4 py-2 text-right text-sm font-medium text-[#ffffff]">
        Total Products
      </th>
      <th scope="col" className="px-4 py-2 text-right text-sm font-medium text-[#ffffff]">
        Total Earning
      </th>
      <th scope="col" className="px-4 py-2 text-center text-sm font-medium text-[#ffffff] w-16">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-[#ffffff] odd">
      <td colSpan="6" className="px-4 py-4 text-center">
        No data available in table
      </td>
    </tr>
  </tbody>
</table>

<div className="flex w-full justify-between flex-row mx-1">
  <div className="w-full justify-between md:w-1/2 px-2">
    <div className="text-[#d4d4d4] text-sm font-light" role="status" aria-live="polite">
      Showing 0 to 0 of 0 entries
    </div>
  </div>
  <div className="w-full md:w-1/2 px-2">
    <div className="flex items-center justify-end">
      <ul className="pagination flex gap-3 list-none rounded-md">
        <li className="page-item disabled cursor-not-allowed">
          <a className="page-link px-1 py-2 rounded-l-md hover:bg-[#3f3c57] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#9055fd] disabled:opacity-50" href="#" aria-disabled="true" tabIndex="-1">Previous</a>
        </li>
        <li className="page-item disabled cursor-not-allowed">
          <a className="page-link px-1 py-2 rounded-r-md hover:bg-[#3f3c57] focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#9055fd] disabled:opacity-50" href="#" aria-disabled="true" tabIndex="-1">Next</a>
        </li>
      </ul>
    </div>
  </div>
</div>


    </div>
  );
};

export default Category;
