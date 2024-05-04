import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetProductsCategoryQuery } from "../../redux/api/AuthApi";

const PrintTable = () => {
  const { currentData, isSuccess } = useGetProductsCategoryQuery();
  const { pageNum, bgColor, currentPage } = useSelector(
    (state) => state.animateSlice
  );

  //pagination
  const indexOfLastProduct = currentPage * pageNum;
  const indexOfFirstProduct = indexOfLastProduct - pageNum;

  const categoryList = currentData?.data.categories.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    isSuccess === true && window.print();
    window.focus();
    window.print();
    window.location.replace("/products/productcategories");
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className="w-[100%]  h-screen p-4  z-[99999] absolute right-0 top-[0px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <table
        id="catListTable"
        className="w-[100%]   right-0 top-[0px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS CATEGORY CODE
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS CATEGORY NAME
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryList?.map((catData) => {
            return (
              <tr
                key={catData.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {catData.id}
                </th>
                <td className="px-6 py-4">{catData.productCategoryCode}</td>
                <td className="px-6 py-4">{catData.productCategoryName}</td>
              </tr>
            );
          })}
        </tbody>
        {/* <div ref={printableRef} style={{ display: "none" }} />{" "} */}
        {/* Hidden printable content */}
      </table>
    </div>
  );
};

export default PrintTable;
