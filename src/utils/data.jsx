import {MdOutlineAddHomeWork} from "react-icons/md";
import {RxDashboard} from "react-icons/rx";
import {TbUsers} from "react-icons/tb";
import {RiListOrdered2} from "react-icons/ri";
import {MdOutlineManageSearch} from "react-icons/md";
import {CiSettings} from "react-icons/ci";
import {IoIosLogOut} from "react-icons/io";
import {FiShoppingBag} from "react-icons/fi";
import burger from "../assets/burger-ac2b9f02.svg";
import bakery from "../assets/bakery-72cb9b3e.svg";
import bubble from "../assets/bubble-tea-5a8ac6be.svg";
import gelato from "../assets/gelato-be97ae84.svg";
import pizza from "../assets/pizza-b04aa43d.svg";
import seafood from "../assets/seafood-74ad4647.svg";
import noodles from "../assets/noodles-65d947ec (1).png";
import red_velvet from "../assets/red-velvet-pastry-b09214ba.png";
import veg_rice from "../assets/veg-rice-e40004d1.png";
import garlic from "../assets/garlic-herb-bread-8a00951d.png";
export const linksData = [
  {
    name: "dashboard",
    path: "/",
    icon: <RxDashboard />,
  },
  {
    name: "manage",
    path: "/manage",
    icon: <MdOutlineManageSearch />,
  },
  {
    name: "restaurants",
    path: "/restaurants",
    icon: <MdOutlineAddHomeWork />,
  },
  {
    name: "products",
    path: "/products",
    icon: <FiShoppingBag />,
  },
  {
    name: "orders",
    path: "/orders",
    icon: <RiListOrdered2 />,
  },
  {
    name: "customers",
    path: "/customers",
    icon: <TbUsers />,
  },
  {
    name: "settings",
    path: "/settings",
    icon: <CiSettings />,
  },
  {
    name: "logout",
    path: "/logout",
    icon: <IoIosLogOut />,
  },
];
export const categoryData = [
  {
    name: "Bakery",
    img: bakery,
  },
  {
    name: "Seafood",
    img: seafood,
  },
  {
    name: "Pizza",
    img: pizza,
  },
  {
    name: "Desserts",
    img: gelato,
  },
  {
    name: "Bubble Tea",
    img: bubble,
  },
  {
    name: "Burger",
    img: burger,
  },
];

export const productData = [
  {
    name: "Noodles",
    img: noodles,
    price: 10,
  },
  {
    name: "Red Velvet",
    img: red_velvet,
    price: 15,
  },
  {
    name: "Veg Rice",
    img: veg_rice,
    price: 20,
  },
  {
    name: "Garlic",
    img: garlic,
    price: 5,
  },
];

export const cartData = [
  {
    id: 1,
    img: pizza,
    name: "Pizza",
    price: 10,
    qty: 2,
  },
  {
    id: 2,
    img: burger,
    name: "burger",
    price: 15,
    qty: 1,
  },
  {
    id: 3,
    img: bakery,
    name: "Bakery",
    price: 5,
    qty: 3,
  },
];
