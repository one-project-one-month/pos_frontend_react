import "./invoice.css";
const AddNewInvoice = () => {
  return (
    <section className=" InvoiceSection bg-[#28243d] ">
      <div className=" text-[#e6e6eb] bg-[#312d4b] InvoiceCard  flex rounded-md p-4 w-[75%] h-full ">
        Add New Invoice
      </div>

      <div className=" text-[#e6e6eb] bg-[#312d4b] InvoiceCard  flex rounded-md p-4 w-[25%] h-[200px] ">
        Button Group
      </div>
    </section>
  );
};

export default AddNewInvoice;
