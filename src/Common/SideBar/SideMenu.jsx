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
