import React from 'react';
import { Plus  } from 'lucide-react';
import {  useSelector } from 'react-redux';

const Allproducts = ({ datas, addToOrder }) => {
    const handleClick = (data) => {
        addToOrder(data);
    };

    
    const color = useSelector((state) => state.animateSlice)

    return (
        <div className="flex items-center gap-2 flex-wrap max-h-[600px] overflow-scroll mb-3">
            {datas && datas.map((data) => (
                <div
                style={{
                    color:color.textColor,
                    backgroundColor:color.cardBgColor,
             }}
                key={data.productId} className="w-[275px] p-2 bg-white space-y-3 border border-gray-200 rounded-md mb-2">

                    <div
                    
                    className="font-semibold flex flex-row  items-center">
                        {data.productName}
                        <button className='ml-[2rem] bg-[#262626] hover:bg-slate-500 flex items-center justify-center w-[5rem] rounded-md text-white' onClick={() => handleClick(data)}>
                            Add
                            <Plus  className="w-6 h-6 ml-1 text-[#eee9e9]" />
                        </button>
                    </div>
                    <div className="px-2 py-1 max-w-fit bg-teal-100 text-gray-700 text-xs rounded-sm">
                        {data.productCode}
                    </div>
                    <div className="text-blue-400 font-semibold text-sm">${data.price}</div>
                </div>
            ))}
        </div>
    );
};

export default Allproducts;
