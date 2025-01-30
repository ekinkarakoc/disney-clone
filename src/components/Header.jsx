import React, { useState } from "react";
import logo from "../assets/images/d-logo.png";
import user from "../assets/images/user-avatar.svg";
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
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  console.log(toggle);

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="disney-logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem
              key={index}
              name={item.name}
              Icon={item.icon}
              index={index}
            />
          ))}
        </div>
        <div className="flex gap-8 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  key={index}
                  name={""}
                  Icon={item.icon}
                  index={index}
                />
              )
          )}
          <div className="md:hidden">
            <div
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <HeaderItem name="" Icon={HiDotsVertical} />
            </div>
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-4 px-5">
                {menu
                  .filter((_, index) => index > 2)
                  .map((item, index) => (
                    <HeaderItem
                      key={index}
                      name={item.name}
                      Icon={item.icon}
                      index={index}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={user} alt="user-avatar" className="w-[40px] rounded-full" />
    </div>
  );
};

export default Header;
