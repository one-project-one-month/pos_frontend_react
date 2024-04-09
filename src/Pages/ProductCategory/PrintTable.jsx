import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryList } from "../../redux/services/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PrintTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryList } = useSelector((state) => state.authSlice);

  useEffect(() => {
    const usefetchData = async () => {
      try {
        const response = await axios.get("/src/db/db.json");
        dispatch(
          setCategoryList({ categoryList: response.data.productCategories })
        );
      } catch (error) {
        console.error(error);
      } finally {
        window.print();

        navigate(-1);
      }
    };

    usefetchData();
  }, []);

  return (
    <div className="w-[100%] bg-[#28243d] h-screen p-4  absolute right-0 top-[0px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <table
        id="catListTable"
        className="w-[100%]   right-0 top-[0px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS CATEGORY CODE
            </th>
            <th scope="col" className="px-6 py-3">
              PRODUCTS CATEGORY NAME
            </th>

            <th scope="col" className="px-6 py-3">
              Action
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
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {catData.id}
                </th>
                <td className="px-6 py-4">{catData.productCategoryCode}</td>
                <td className="px-6 py-4">{catData.productCategoryName}</td>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
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
