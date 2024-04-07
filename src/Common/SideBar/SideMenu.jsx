import {  BoltIcon, Clipboard ,History, Home, List, NotepadText, Package, ShoppingBagIcon, SquareGanttChartIcon, Users } from "lucide-react";

const SideMenu = [
    {
      routeName: "Dashboard",
      icon: <Home/>,
      route: "/",
    },
    {
      routeName: "General",
      icon: <BoltIcon />,
      route: "/general",
      children:[
        {
          childrenName:'Shop',
          route:'/general/shops',
          icon:<ShoppingBagIcon/>
        },
        {
          childrenName:'Customers',
          route:'/general/customers',
          icon:<Users/>
        },
      ]
    },
    {
      routeName: "Products",
      icon: <Package />,
      route: "/products",
      children: [
        {
          childrenName: "Products Category",
          route: "products/productcategories",
          icon: <List />,
        },
      ],
    },
    {
      routeName: "Invoice",
      icon: <NotepadText />,
      children: [
        {
          childrenName: "List",
          route: "invoice/list",
        },
        {
          childrenName: "Preview",
          route: "invoice/preview",
        },
        {
          childrenName: "Edit",
          route: "invoice/edit",
        },
        {
          childrenName: "Add",
          route: "invoice/add",
        },
      ],
    },
    {
      routeName:'SaleInvoice',
      icon:<Clipboard/>,
      route:'/saleinvoices',
      children:[
        {
          childrenName:'SaleInvoice Detail',
          route:'saleinvoices/saleinvoicedetails',
          icon:<SquareGanttChartIcon/>
        }
      ]
    },
    {
      routeName: "History",
      icon: <History />,
      route: "/history",
    },
  ];

export default SideMenu