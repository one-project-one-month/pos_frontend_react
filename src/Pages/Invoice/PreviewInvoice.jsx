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
        <div className='flex flex-col gap-3 right-10 ml-[20%] mt-[2%] w-full top-[50px] h-auto justify-between items-start'>
            <div className='flex gap-14 w-full h-[90%]'>
                {/* Right side */}
                <div className='bg-[#312d4b] px-3 w-[70%] h-96 rounded-md'>
                    <table className='bg-white w-full h-full rounded-md mt-2'>
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
                                <tr key={item.id} className='border-b border-grey-50'>
                                    <td >{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.cost}</td>
                                    <td>
                                        {/* Input field to change quantity */}
                                        <input
                                            type="number"
                                            value={item.qty}
                                            onChange={e => handleQtyChange(item.id, parseInt(e.target.value))}
                                            className='border-[#d6d3d1]'
                                        />
                                    </td>
                                    <td>{item.qty * item.cost}</td> {/* Calculate price */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Left side */}
                <div className='bg-[#5ec26b] w-[30%] h-52'>
                    Total Price: {totalPrice}
                </div>
            </div>
        </div>
    );
}

export default Quantity;
