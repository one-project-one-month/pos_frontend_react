import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Staff from "../Pages/Staff/Staff";
import Shop from "../Pages/Shop/Shop";
import Customer from "../Pages/Customer/Customer";
import SaleInvoice from "../Pages/SaleInvoice/Saleinvoice";
import Detail from "../Pages/Detail/Detail";
import Product from "../Pages/Product/Product";
import ProductCategory from "../Pages/ProductCategory/Category";
import Invoice from "../Pages/Invoice/Invoice";
import InvoiceList from "../Pages/Invoice/InvoiceList";
import EditInvoice from "../Pages/Invoice/EditInvoice";
import AddNewInvoice from "../Pages/Invoice/AddNewInvoice";
import PreviewInvoice from "../Pages/Invoice/PreviewInvoice";
import HistoryPage from "../Pages/History/History";

export const routes = 
[
  {
    path: "/",
    Component: Main,

    handle: { title: "Home" },
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "general",
        handle: { title: "Staffs" },
        children: [
          {
            index: true,
            Component: Staff,
          },
          {
            path: "general/shops",
            handle: { title: "Shop" },
            Component: Shop,
          },
          {
            path: "general/customers",
            handle: { title: "Customer" },
            Component: Customer,
          },
        ],
      },
      {
        path: "products",

        handle: { title: "Products" },
        children: [
          {
            index: true,
            Component: Product,
          },
          {
            path: "products/productcategories",
            handle: { title: "Product Category" },
            Component: ProductCategory,
          },
        ],
      },
      {
        path: "invoice",

        handle: { title: "Invoice" },
        children: [
          {
            index: true,
            Component: Invoice,
          },
          {
            path: "invoice/list",
            handle: { title: "Invoice List" },
            Component: InvoiceList,
          },
          {
            path: "invoice/edit",
            handle: { title: "Edit Invoice" },
            Component: EditInvoice,
          },
          {
            path: "invoice/add",
            handle: { title: "Create New Invoice" },
            Component: AddNewInvoice,
          },
          {
            path: "invoice/preview",
            handle: { title: "Invoice Preview" },
            Component: PreviewInvoice,
          },
        ],
      },
      {
        path: "history",
        Component: HistoryPage,

        handle: { title: "History" },
      },
      {
        path: "saleinvoices",
        handle: { title: "Saleinvoices" },
        children: [
          {
            index: true,
            Component: SaleInvoice,
          },
          {
            path: "saleinvoices/saleinvoicedetails",
            handle: { title: "Saleinvoice Detail" },
            Component: Detail,
          },
          {
            path: "saleinvoices/saleinvoicedetails",
            handle: { title: "Saleinvoice Detail" },
            Component: Detail,
          },
        ],
      },
    ],
  },
];
