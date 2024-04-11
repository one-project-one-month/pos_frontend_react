import React from 'react'

const Deleteform = ({discardChanges,deleteShop}) => {
  return (
    <>
     <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
     <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
       <form className="w-[600px] mx-auto bg-white p-6 rounded-lg border border-gray-100">
         <h1 className='font-semibold text-lg mb-3'>
           Delete Shop
         </h1>
         <div className="w-full px-3 mb-6 ">
           <h1>Are you sure you want to delete the shop?</h1>
         </div>
         <div className='flex items-center gap-3 justify-end'>
            <button type="button" className="p-2.5 ms-2 text-sm font-medium text-black bg-gray-100 rounded-lg  hover:bg-gray-300 focus:outline-none dark:border border-gray-300 focus:ring-gray-300 dark:bg-gray-white dark:hover:bg-gray-200 dark:focus:ring-gray-200" onClick={discardChanges}>
              Cancel
            </button>
            <button type="button" className="p-2.5 ms-2 text-sm font-medium text-white bg-red-500 rounded-lg  hover:bg-red-700 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={deleteShop} >
              Delete
            </button>
          </div>
       </form>
     </div>
   </>
  )
}

export default Deleteform
