import "./invoice.css";
const AddNewInvoice = () => {
    return (
        <section className=" InvoiceSection  flex gap-3 bg-white overflow-hidden rounded-md">
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
