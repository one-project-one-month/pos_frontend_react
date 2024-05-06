import NotFound from "../Pages/NotFound/NotFound";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Staff from "../Pages/Staff/Staff";
import Shop from "../Pages/Shop/Shop";
import CustomerList from "../Pages/Customer/CustomerList";
import Product from "../Pages/Product/Product";
import ProductCategory from "../Pages/ProductCategory/Category";
import Invoice from "../Pages/Invoice/Invoice";
import InvoiceList from "../Pages/Invoice/InvocieList/InvoiceList";
import AddNewInvoice from "../Pages/Invoice/AddNewInvoice";
import PreviewInvoice from "../Pages/Invoice/PreviewInvoice";
import HistoryPage from "../Pages/History/History";
// import PrintTable from "../Pages/ProductCategory/PrintTable";
import AddStaff from "../Pages/Staff/AddStaff";
import NewShop from "../Pages/Shop/NewShop";
import EditStaff from "../Pages/Staff/EditStaff";
import EditProduct from "../Pages/Product/editProduct";
import ProductTable from "../Pages/Product/PrintTable";
import PrintTable from "../Pages/ProductCategory/PrintTable";

export const routes = [
  {
    path: "/",
    handle: { title: "Home" },
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        Component: <Dashboard />,
      },
      {
        path: "general",
        handle: { title: "Staffs" },
        Component: <Staff />,
        children: [
          {
            index: true,
            Component: <Staff />,
          },
          {
            path: "general/add",
            handle: { title: "Add Staff" },
            Component: <AddStaff />,
          },
          {
            path: "general/:staffId",
            handle: { title: "Edit Staff" },
            Component: <EditStaff />,
          },
          {
            path: "general/shops",
            handle: { title: "Shop" },
            Component: <Shop />,
          },
          {
            path: "general/shops/newshop",
            handle: { title: "New Shop" },
            Component: <NewShop />,
          },
          {
            path: "general/customers",
            handle: { title: "Customer" },
            Component: <CustomerList />,
          },
          {
            path: "general/customers/:customerId",
            handle: { title: "customer list" },
            Component: <CustomerList />,
          },
        ],
      },
      {
        path: "products",
        Component: <Product />,
        handle: { title: "Products" },
        children: [
          {
            index: true,
            Component: <Product />,
          },
          {
            path: "products/productcategories",
            handle: { title: "Product Category" },
            Component: <ProductCategory />,
          },
          {
            path: "products/addProduct",
            handle: { title: "Add Product" },
            // Component: <AddProduct />,
          },{
            path: "products/editProduct",
            handle: { title: "Edit Product" },
            Component: <EditProduct />,
          },

        ],
      },
      {
        path: "invoice",
        Component: <Invoice />,
        handle: { title: "Invoice" },
        children: [
          {
            index: true,
            Component: <Invoice />,
          },
          {
            path: "invoice/list",
            handle: { title: "Invoice List" },
            Component: <InvoiceList />,
          },
          {
            path: "invoice/add",
            handle: { title: "Create New Invoice" },
            Component: <AddNewInvoice />,
          },
          {
            path: "invoice/add/:code",
            handle: { title: "Create New Invoice" },
            Component: <AddNewInvoice />,
          },
          {
            path: "invoice/preview/:saleInvoiceId",
            handle: { title: "Invoice Preview" },
            Component: <PreviewInvoice />,
          },
        ],
      },
      {
        path: "history",
        Component: <HistoryPage />,

        handle: { title: "History" },
      },
      {
        path: "printtable",
        Component: <ProductTable />,

        handle: { title: "Print Table" },
      },
      {
        path:"printtableCat",
        Component: <PrintTable />,

        handle: { title: "Print Table" },
      }
    ],
  },
];
