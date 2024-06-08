import { Navbar } from "@components/organisms";
import Header from "@layouts/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({}) => {
  return (
    <div className="w-full h-screen bg-[#f2f3fb] p-5 overflow-hidden relative block">
      <div className="max-w-[1400px] bg-white w-full rounded-[16px] shadow-md mx-auto overflow-hidden">
        <Header />
        <div className="w-full h-full flex pl-5">
          <Navbar />
          <div style={{ flex: 1 }} className="w-full h-[700px] pl-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
