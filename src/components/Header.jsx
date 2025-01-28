import React from "react";
import logo from "../assets/images/d-logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "SERIES", icon: HiTv },
    { name: "MOVIES", icon: HiPlayCircle },
  ];

  return (
    <div>
      <img
        src={logo}
        alt="disney-logo"
        className="w-[80px] md:w-[115px] object-cover"
      />
      {menu.map((item, index) => (
        <HeaderItem
          key={index}
          name={item.name}
          icon={item.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default Header;
