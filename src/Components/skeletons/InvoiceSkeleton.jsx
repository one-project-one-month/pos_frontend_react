export const InvoiceSkeleton = () => {
  return (
    <div className='rounded-lg bg-slate-200 h-10 w-full animate-pulse'></div>
  )
}

export const TableSkeleton = () => {
    return (
      <div className='rounded-lg bg-slate-200 h-[450px] w-full animate-pulse'></div>
    )
  }

export const PaginationSkeleton = () => {
    return (
      <div className='rounded-lg bg-slate-200 h-10 w-[150px] animate-pulse'></div>
    )
  }

export const AllProductsSkeleton = ({ itemsPerPage }) => {
    const slicedData = Array.from({ length: itemsPerPage }, (_, i) => i + 1);
  
    return (
      <>
        {slicedData &&
          slicedData.map((data,i) => (
            <div
              key={i}
              className="w-[262px]  min-h-[130px]  p-2 bg-slate-200 space-y-3 rounded-md animate-pulse"
            >
              <div className="font-semibold text-slate-200">gg</div>
              <div className="px-2 py-1 max-w-fit text-slate-200 text-xs rounded-sm">
                wp
              </div>
              <div className="font-semibold text-sm text-slate-200">ggwp</div>
            </div>
          ))}
      </>
    );
  };

export const SliderSkeleton = () => {
    return (
      <div className='w-full rounded-lg bg-slate-200 ml-2 h-10 animate-pulse'></div>
    )
  }

export const SearchSkeleton = () => {
    return (
      <div className='w-[10%] rounded-lg bg-slate-200 ml-2 h-10 animate-pulse'></div>
    )
  };

export const OrderDetailsSkeleton = () => {
    return (
      <div 
      className="InvoiceCard px-3 w-full h-[100%] rounded-md  bg-slate-200 py-2 space-y-2 animate-pulse">
          <h1 className="font-bold"></h1>
          <div className="overflow-y-auto  h-[26rem] space-y-3 " >
          </div>
          <div
          className="  flex flex-col w-full rounded-sm">
              <div className="w-[52] py-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm  text-slate-200">SubTotal</h3>
                    <p className="text-sm font-semibold text-slate-200">$gg</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-slate-200">Discount sales</h3>
                    <p className="text-sm  text-slate-200 font-semibold">$gg</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-slate-200">Discount sales</h3>
                    <p className="text-sm font-semibold text-slate-200">$gg</p>
                  </div>
              </div>
              <div className="mt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-slate-200">Discount sales</h3>
                    <p className="text-sm font-semibold text-slate-200">$gg</p>
                  </div>
                  <button className='mb-2 mr-10 w-full py-2 rounded-md  mt-3'></button>
              </div>
          </div>
      </div>
    )
  }