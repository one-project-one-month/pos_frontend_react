import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { pageOn, setPageNum } from "../../redux/services/animateSlice";

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
          <div
            onClick={() => {
              dispatch(pageOn({ page: !page }));
              console.log(page);
            }}
            className=" cursor-pointer flex justify-evenly items-center rounded-md w-[15%] h-full border border-[#76728e] "
          >
            <p>{pageNum}</p>
            <TiArrowSortedDown
              className=" transition-all "
              style={{
                rotate: page === true ? "360deg" : "270deg",
              }}
            />
          </div>


            {/* Page Count  */}
          <div
            style={{
              visibility: page === true ? "visible" : "collapse",
            }}
            className="  flex flex-col justify-center items-center gap-3 absolute w-[15%] h-auto border-2 rounded-md bg-[#312d4b] border-[#76728e] top-[100%] "
          >
            {pageCount.map((num) => {
              return (
                <p
                  style={{
                    backgroundColor:
                      num === pageNum ? "#16b1ff" : "transparent",
                  }}
                  onClick={() => dispatch(setPageNum({ pageNum: num }))}
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
        </div>
      </div>
    </div>
  );
};

export default Category;
