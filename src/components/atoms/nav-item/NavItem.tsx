import { INavItem } from "@components/organisms";
import { Typography } from "antd";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "../styles/NavItem.scss";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface NavItemProps {
  navItemData: INavItem;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ navItemData, className }) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          if (navItemData.url) {
            navigate(navItemData.url);
          }
          setIsActive(!isActive);
        }}
        className={classNames(
          className,
          navItemData.url === pathname
            ? "bg-primary text-white active_nav"
            : "",
          "nav_item flex items-center justify-between transition-all duration-300 ease-in-out rounded-lg px-3 py-2 text-primary cursor-pointer"
        )}
      >
        <div className="flex items-center gap-2">
          {navItemData.icon}
          <Typography className="title text-primary">
            {navItemData.title}
          </Typography>
        </div>
        {navItemData.children && (
          <FaChevronDown
            style={{ transform: isActive ? "rotate(0)" : "rotate(180deg)" }}
            className={classNames("transition-all ease-in-out")}
          />
        )}
      </div>
      <div
        className={classNames(
          isActive ? "sub_item_active" : "sub_item",
          "h-full transition-all duration-300 ease-in-out overflow-hidden"
        )}
      >
        {navItemData.children?.map((item, index) => {
          return <NavItem navItemData={item} key={index} className="pl-10" />;
        })}
      </div>
    </div>
  );
};
export default NavItem;
