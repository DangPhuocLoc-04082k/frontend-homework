import NavItem from "@components/atoms/nav-item/NavItem";
import { NAVBAR } from "@constants";
import { Typography } from "antd";
import classNames from "classnames";
import React, { ReactNode, useState } from "react";

interface NavbarProps {}

export interface INavItem {
  title: string;
  icon: string | ReactNode;
  url?: string;
  children?: INavItem[];
}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={classNames(isActive ? "w-[200px]" : "")}>
      {NAVBAR.map((item, index) => {
        return (
          <div key={index}>
            <Typography className="text-[12px] font-bold text-primary">
              {item.label}
            </Typography>
            <div className="">
              {item.data.map((item, i) => {
                return <NavItem key={i} navItemData={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Navbar;
