import React from 'react'

const Allproducts = ({datas,addToOrder}) => {

  const handleClick = (data) => {
    addToOrder(data);
};


  return (
    <div className="flex items-center gap-2 flex-wrap max-h-[600px] overflow-scroll">
       {datas && datas.map((data)=>(
            <div key={data.productId} className="w-[262px] p-2 bg-white space-y-3 border border-gray-200 rounded-md" onClick={() => handleClick(data)}>
                <div className="font-semibold">{data.productName}</div>
                <div className="px-2 py-1 max-w-fit bg-teal-100 text-gray-700 text-xs rounded-sm">        
                    {data.productCode}
                </div>
                <div className="text-blue-400 font-semibold text-sm">${data.price}</div>
            </div>
        ))}
    </div>             
  )
}

export default Allproducts