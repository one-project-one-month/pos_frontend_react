
export const routes=[
import Main from '../Layout/Main'
import NotFound from '../Pages/NotFound/NotFound'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Staff from '../Pages/Staff/Staff'
import Shop from '../Pages/Shop/Shop'
import Customer from '../Pages/Customer/Customer'
import SaleInvoice from '../Pages/SaleInvoice/Saleinvoice'
import Detail from '../Pages/Detail/Detail'
import Product from '../Pages/Product/Product'
import ProductCategory from '../Pages/ProductCategory/Category'

export const routes=[
    {
        path:'/',
        Component:Main,
        handle: {title:"Home"},
        errorElement:<NotFound />,
        children:[
            {
                index:true,
                Component:Dashboard
            },
            {
                path:"general",
                handle:{title:"Staffs"},
                children:[
                    {
                        index:true,
                        Component:Staff
                    },
                    {
                        path:"general/shops",
                        handle:{title:"Shop"},
                        Component:Shop
                    },
                    {
                        path:"general/customers",
                        handle:{title:"Customer"},
                        Component:Customer
                    }
                ]
            },
            {
                path:"products",
                handle:{title:"Products"},
                children:[
                    {
                        index:true,
                        Component:Product
                    },
                    {
                        path:"products/productcategories",
                        handle:{title:"Product Category"},
                        Component:ProductCategory
                    }
                ]
            },
            {
                path:"saleinvoices",
                handle:{title:"Saleinvoices"},
                children:[
                    {
                        index:true,
                        Component:SaleInvoice
                    },
                    {
                        path:"saleinvoices/saleinvoicedetails",
                        handle:{title:"Saleinvoice Detail"},
                        Component:Detail
                    }
                ]
            }
        ]
]