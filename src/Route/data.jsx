import Home from "../Pages/Home/Home";
import AddNewInvoice from "../Pages/Invoice/AddNewInvoice";

export const routes=[
    {
     path:'/',
     element:<Home/>
    },
    {
        path:'/add-new-invoice',
        element:<AddNewInvoice/>
    }
]