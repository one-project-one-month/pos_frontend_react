import Quantity from './Quantity';


const PreviewInvoice = () => {
  return (
    <section className=" text-[#d4d4d4] InvoiceSection top-[70px] overflow-hidden rounded-md">
      <div className="InvoiceCard flex gap-5 items-center p-4 w-full h-auto ">
        Preview inVoince
      </div>
      <div>
        <Quantity />
      </div>
    </section>
  );
};

export default PreviewInvoice