import { FaCar, FaTshirt, FaBaby } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdSoupKitchen, MdChair, MdPets, MdOutlineElectricalServices, MdComputer } from "react-icons/md";
import { GiPostStamp, GiOpenBook } from "react-icons/gi";
import { ImMobile } from "react-icons/im";
import { BiBorderAll } from "react-icons/bi";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiBaseball } from "react-icons/ci";
import { CategoryProp, /*StatusType*/ } from "../@types";

export const CategoryArr: CategoryProp[] = [
  {
    text: "רכב",
    icon: <FaCar />,
    endpoint: "cars",
  },
  {
    text: 'נדל"ן',
    icon: <IoMdHome />,
    endpoint: "houses",
  },
  {
    text: "מטבח",
    icon: <MdSoupKitchen />,
    endpoint: "kitchen",
  },
  {
    text: "רהיטים",
    icon: <MdChair />,
    endpoint: "furniture",
  },
  {
    text: "ביגוד והנעלה",
    icon: <FaTshirt />,
    endpoint: "fashion",
  },
  {
    text: "אוספים",
    icon: <GiPostStamp />,
    endpoint: "collections",
  },
  {
    text: "חיות מחמד",
    icon: <MdPets />,
    endpoint: "pets",
  },
  {
    text: "ספרים",
    icon: <GiOpenBook />,
    endpoint: "books",
  },
  {
    text: "מוצרי חשמל",
    icon: <MdOutlineElectricalServices />,
    endpoint: "electric",
  },
  {
    text: "ספורט",
    icon: <CiBaseball />,
    endpoint: "sport",
  },
  {
    text: "סלולר",
    icon: <ImMobile />,
    endpoint: "cellular",
  },
  {
    text: "מחשבים",
    icon: <MdComputer />,
    endpoint: "computers",
  },
  {
    text: "לתינוק ולילד",
    icon: <FaBaby />,
    endpoint: "babies",
  },
  {
    text: "שונות",
    icon: <BiBorderAll />,
    endpoint: "others",
  },
  {
    text: "הכל בחינם",
    icon: <AiFillDollarCircle />,
    endpoint: "free",
  },
];
export const categoryArr = ["רכב", 'נדל"ן', "מטבח", "רהיטים", "ביגוד והנעלה", "אוספים", "חיות מחמד", "ספרים", "מוצרי חשמל", "ספורט", "סלולר", "מחשבים", "לתינוק ולילד", "שונות"];

export const Status/*: StatusType[]*/ = ["חדש", "כמו חדש", "מצב טוב", "משומש", "דרוש תיקון"];
