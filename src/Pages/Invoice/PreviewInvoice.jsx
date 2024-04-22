import Quantity from './Quantity';
import { useSelector } from "react-redux";

const PreviewInvoice = () => {
  const color = useSelector(state => state.animateSlice);

  return (
    <section
      style={{
        color: color.textColor,
        backgroundColor: color.bgColor
      }}
      className="absolute right-2 w-[80%] top-[70px] overflow-hidden rounded-md"
    >
      <div className="InvoiceCard rounded-md flex gap-5 items-center p-4 w-full h-auto ">
        <Quantity color={color} />
      </div>
    </section>
  );
};

export default PreviewInvoice;
