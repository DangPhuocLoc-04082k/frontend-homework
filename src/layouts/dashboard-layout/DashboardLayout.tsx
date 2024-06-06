import { Navbar } from "@components/organisms";
import React from "react";
import { Outlet } from "react-router-dom";

interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({}) => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ marginLeft: "200px", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
