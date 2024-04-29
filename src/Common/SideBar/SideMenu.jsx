import {
  BoltIcon,
  Home,
  List,
  NotepadText,
  Package,
  ShoppingBagIcon,
  Users,
} from "lucide-react";

const SideMenu = [
  {
    routeName: "Dashboard",
    icon: <Home />,
    route: "/",
  },
  {
    routeName: "General",
    icon: <BoltIcon />,
    route: "/general",
    children: [
      {
        childrenName: "Shop",
        route: "/general/shops",
        icon: <ShoppingBagIcon />,
      },
      {
        childrenName: "Customers",
        route: "/general/customers",
        icon: <Users />,
      },
    ],
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
        childrenName: "Add",
        route: "invoice/add",
      },
    ],
  },
];

export default SideMenu;
