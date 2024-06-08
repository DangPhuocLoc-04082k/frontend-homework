import { Avatar, Button, Popover, Typography } from "antd";
import React, { useState } from "react";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoNotifications, IoSearch } from "react-icons/io5";
import manImg from "../../assets/images/dashboard/man.jpg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const actionButton = [
    {
      icon: <IoSearch />,
      onClick: () => {},
    },
    {
      icon: <IoNotifications />,
      onClick: () => {},
    },
  ];

  return (
    <div className="flex items px-5 py-6">
      <div className="w-[200px] flex items-center gap-2 text-primary">
        <FaFileInvoiceDollar />
        <Typography className="text-[16px] font-bold text-primary">
          Microinvoice
        </Typography>
      </div>
      <div
        style={{ flex: "1" }}
        className="w-full flex items-center justify-between pl-5"
      >
        <Typography className="text-[26px] font-bold text-primary">
          New document
        </Typography>
        <div className="flex items-center gap-3">
          {actionButton.map((item, index) => {
            return (
              <Button
                key={index}
                onClick={item.onClick}
                style={{
                  border: "none",
                  width: "24px",
                  height: "24px",
                }}
                className="p-0 rounded-[12px] bg-gray flex items-center justify-center hover:bg-[#c4c4c4]"
              >
                {item.icon}
              </Button>
            );
          })}
          <Popover
            className="ml-3"
            content={<div>This is account setting options</div>}
            title="Account Settings"
            trigger="click"
            open={isPopUp}
            onOpenChange={(newOpen) => {
              setIsPopUp(newOpen);
            }}
          >
            <Avatar
              style={{ cursor: "pointer" }}
              size="large"
              src={manImg}
              alt="man avt"
            />
          </Popover>
        </div>
      </div>
    </div>
  );
};
export default Header;
