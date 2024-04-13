import React from 'react'

const Editform = ({newShopCode,newShopName,newShopAddress,newShopmobileNo,changeHandler,discardChanges,submitHandler,isSave,setIsSave}) => {
  return (
    <>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
        <form className="w-[600px] mx-auto bg-white p-6 rounded-lg border border-gray-100" onSubmit={submitHandler}>
          <h1 className='font-semibold text-lg mb-6'>
            Edit Shop
          </h1>
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Shope Code
            </label>
            <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-first-name" type="text" name='shopCode' placeholder="Enter your shop code"  value={newShopCode} onChange={e => changeHandler(e.target) }/>
            {isSave && !newShopCode &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Shop Name
            </label>
            <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-first-name" type="text" name='shopName' placeholder="Enter your shop name"  value={newShopName} onChange={e => changeHandler(e.target) }/>
            {isSave && !newShopName &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Mobile Number
            </label>
            <input className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-last-name" type="text" name='mobileNo' placeholder="Enter your mobile number" value={newShopmobileNo} onChange={e => changeHandler(e.target) }/>
            {isSave && !newShopmobileNo &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Address
            </label>
            <textarea className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500`} id="grid-last-name" rows='6' name='address' placeholder="Enter your address"value={newShopAddress} onChange={e => changeHandler(e.target) } />
            {isSave && !newShopAddress &&  <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
          </div>
          <div className='flex items-center gap-3 justify-end'>
            <button type="button" className="p-2.5 ms-2 text-sm font-medium text-black bg-gray-100 rounded-lg  hover:bg-gray-300 focus:outline-none dark:border border-gray-300 focus:ring-gray-300 dark:bg-gray-white dark:hover:bg-gray-200 dark:focus:ring-gray-200" onClick={discardChanges}>
              Cancel
            </button>
            <button type='submit' className="py-2.5 px-4 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg  hover:bg-blue-700 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setIsSave(true)}>
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Editform
