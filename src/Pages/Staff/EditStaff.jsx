import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const EditStaff = () => {
  const { staffId } = useParams();
  const [editData, setEditData] = useState({
    staffCode: "",
    staffName: "",
    password: "",
    dateOfBirth: "",
    mobileNo: "",
    gender: "",
    position: "",
    address: "",
  });

  const getData = async () => {
    await axios
      .get(`https://pos-frontend-next-ruby.vercel.app/api/v1/staffs/${staffId}`)
      .then((res) => setEditData(res.data.data.staff))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const navigate = useNavigate();
  const handle = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        `https://pos-frontend-next-ruby.vercel.app/api/v1/staffs/${staffId}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    navigate("/general");
  };

  
  return (
    <>
      <div className=" bg-[#28243d] absolute right-[25%] top-[30px] rounded-br-md  p-2">
        <form
          className="w-[600px] h-[550px]   mx-auto mt-4 py-4 rounded-lg  shadow-md"
          onSubmit={handle}
        >
          <div className="logo mt-2">
            <h2 className="text-white text-center text-3xl font-bold">
              Edit A Staff
            </h2>
          </div>
          <div className="flex flex-col m-4 mt-2">
            <label className="text-white text-xl">StaffCode:</label>
            <input
              type="text"
              placeholder="e.g. s01"
              name="staffCode"
              value={editData.staffCode}
              className="w-[95%] mt-2 bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center items-center w-[100%] px-4">
            <div className="flex flex-col w-[50%]">
              <label className="text-white text-xl">Name:</label>
              <input
                type="text"
                placeholder="Name"
                name="staffName"
                value={editData.staffName}
                onChange={handleChange}
                className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="text-white text-xl">Password:</label>
              <input
                type="text"
                placeholder="password"
                name="password"
                value={editData.password}
                onChange={handleChange}
                className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-[100%] px-4">
            <div className="flex flex-col w-[50%]">
              <label className="text-white text-xl">Date:</label>
              <input
                type="date-time"
                disabled
                placeholder="Name"
                name="dateOfBirth"
                value={moment(editData.dateOfBirth).format("LLL")}
                onChange={handleChange}
                className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label className="text-white text-xl">MobileNo:</label>
              <input
                type="text"
                placeholder="mobileNo"
                name="mobileNo"
                value={editData.mobileNo}
                onChange={handleChange}
                className="w-[90%] mt-2  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md text-white"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-[100%] px-4 mt-4">
            <div className="w-[50%]">
              <label className="text-[#d4d4d4] text-xl">Gender:</label>
              <select
                className="text-xl w-[90%] text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1 mt-2"
                name="gender"
                value={editData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label className="text-[#d4d4d4] text-xl">Position:</label>
              <select
                className="text-xl w-[90%] mt-2 text-[#d4d4d4] bg-transparent border-[#d4d4d48c]  border-[2px] outline-none rounded-md px-2 py-1"
                name="position"
                value={editData.position}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="manager">Manager</option>
                <option value="cashier">Cashier</option>
                <option value="saleperson">Sale Person</option>
                <option value="salehelper">Sale Helper</option>
                <option value="stockkeeper">Stockkeeper</option>
              </select>
            </div>
          </div>
          <div className="m-4 flex flex-col">
            <label className="text-[#d4d4d4] text-xl">Address:</label>
            <textarea
              className="w-[95%] mt-2  text-[#d4d4d4]  bg-transparent border-[#d4d4d48c]  border-[2px] outline-none p-2 rounded-md h-[100px]"
              name="address"
              placeholder="Address"
              value={editData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-center my-4">
            <button
              type="submit"
              className="w-[60%] bg-[#9055fd] text-[#eae9e9] tracking-wide font-medium py-2 rounded-lg cursor-pointer border-0 outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditStaff;
