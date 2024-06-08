import { INavItem } from "@components/organisms";
import { IoHome } from "react-icons/io5";
import { FaFileInvoice, FaChartSimple } from "react-icons/fa6";
import { PiFilePlusBold } from "react-icons/pi";
import { LuFileEdit } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import React from "react";

export interface INavBlock {
  label: string;
  data: INavItem[];
}

export const NAVBAR: INavBlock[] = [
  {
    label: "Recent",
    data: [
      {
        title: "Home",
        icon: <IoHome />,
        url: "/",
      },
      {
        title: "Invoices",
        icon: <FaFileInvoice />,
        url: "/invoices",
        children: [
          {
            title: "Create new",
            icon: <PiFilePlusBold />,
            url: "/invoices/create",
          },
          {
            title: "Edit",
            icon: <LuFileEdit />,
            url: "/invoices/edit",
          },
        ],
      },
      {
        title: "Contractors",
        icon: <FaFileInvoice />,
        url: "/contractors",
        children: [
          {
            title: "Create new",
            icon: <PiFilePlusBold />,
            url: "/contractors/create",
          },
          {
            title: "Edit",
            icon: <LuFileEdit />,
            url: "/contractors/edit",
          },
        ],
      },
      {
        title: "Products and Services",
        icon: <IoHome />,
        url: "/product-and-services",
      },
    ],
  },
  {
    label: "Others",
    data: [
      {
        title: "Users",
        icon: <FaUsers />,
        url: "/users",
      },
      {
        title: "Statitics",
        icon: <FaChartSimple />,
        url: "/statitics",
      },
      {
        title: "Settings",
        icon: <FaChartSimple />,
        url: "/settings",
      },
      {
        title: "Help",
        icon: <FaChartSimple />,
        url: "/help",
      },
    ],
  },
];
