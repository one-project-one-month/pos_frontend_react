import React, { useState } from 'react';
import amountData from "../../db/db.json"

const Quantity = ({color}) => {
    const [items, setItems] = useState(amountData.items);

    // Function to handle quantity change
   const handleQtyChange = (id, newQty) => {
    const updatedItems = items.map(item => {
        if (item.id === id) {
            return { ...item, qty: newQty };
        }
        return item;
    });
    setItems(updatedItems);
};

    // Calculate total price
    const totalPrice = items.reduce((total, item) => total + (item.qty * item.cost), 0);

    return (
        <div className='flex flex-col  gap-3 mt-[2%] w-full top-[50px] h-auto justify-between items-start'>
            <div className='flex gap-14  w-full h-[90%]'>
           
                <div style={{
                    backgroundColor:color.bgColor
                }} className=' px-3 w-[100%] h-[28rem] shadow rounded-md'>
                    <table  style={{
                    backgroundColor:color.cardBgColor
                }}
                  className=' p-3 w-full h-auto rounded-md mt-2'>
                        <thead className='border-b  p-3 h-[3rem] border-grey-50 mb-10'>
                            <tr>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className=' p-3 ' >
                            {items.map(item => (
                                <tr key={item.id} className='border-b text-center   p-3 border-grey-50 gap-14'>
                                    <td className=' p-3 ' >{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.cost}</td>
                                    <td>
                                        {/* Input field to change quantity */}
                                        <input
                                            type="number"
                                            value={item.qty}
                                            onChange={e => handleQtyChange(item.id, parseInt(e.target.value))}
                                            style={{ width: '50px' }}
                                        />
                                    </td>
                                    
                                    <td>{item.qty * item.cost || 0}</td> {/* Calculate price */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                            <div  style={{
                    backgroundColor:color.cardBgColor
                }} className='flex  rounded-lg mt-3  h-24'>
                                <p></p>
                                <p className='flex justify-end mt-3 ml-[80%]'>Total Price: {totalPrice || 0}</p> 
                            </div>
                </div>
                
            </div>
        </div>
    );
}

export default Quantity;
