import React, { useState } from 'react';
import amountData from "../../db/db.json"

const Quantity = () => {
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
        <div className='flex flex-col gap-3 mt-[2%] w-full top-[50px] h-auto justify-between items-start'>
            <div className='flex gap-14 w-full h-[90%]'>
           
                <div className='bg-[#312d4b] px-3 w-[70%] h-[28rem] rounded-md'>
                    <table className='bg-white w-full h-[20rem] rounded-md mt-2'>
                        <thead className='border-b border-grey-50 mb-10'>
                            <tr>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Qty</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id} className='border-b border-grey-50 gap-14'>
                                    <td >{item.name}</td>
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
                            <div className='flex bg-[#8c8b99] rounded-lg mt-3  h-24'>
                               
                                <p className='flex justify-end mt-3 ml-[80%]'>Total Price: {totalPrice || 0}</p> 
                            </div>
                </div>
                
            </div>
        </div>
    );
}

export default Quantity;
