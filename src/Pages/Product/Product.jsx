// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';
import productsData from "../../db/db.json"; // Correct the import path

const Product = () => {
  return (
    <section className='ProductSection'>
      <div className='flex ProductCard bg-[#312d4b]  rounded-md p-4 w-full h-full text-white'>
        <div className='mx-5 mt-5'>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Product Code</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Product Category Code</th>
            </tr>
          </thead>
          <tbody>
            {productsData.products && productsData.products.map(product => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.productCode}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.productCategoryCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};

export default Product;
