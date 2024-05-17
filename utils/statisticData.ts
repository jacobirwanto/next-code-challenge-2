import { GiFactory, GiTwoCoins } from "react-icons/gi";
import {
  FaDollarSign,
  FaBuilding,
  FaAward,
  FaUserFriends,
} from "react-icons/fa";

const statisticsData = [
  { id: 1, label: "Employees", value: "150.000+", icon: FaUserFriends },
  {
    id: 2,
    label: "Manufacturing Facilities",
    value: "8 in 6 Countries",
    icon: GiFactory,
  },
  {
    id: 3,
    label: "Global Presence",
    value: "50+ Office in 80+ Countries",
    icon: FaBuilding,
  },
  { id: 4, label: "Anual Revenue", value: "$21 Billion", icon: FaDollarSign },
  {
    id: 5,
    label: "Market Capitalization",
    value: "$2.3 Trillion",
    icon: GiTwoCoins,
  },
  { id: 6, label: "Awards", value: "25+ ", icon: FaAward },
];

export default statisticsData;
