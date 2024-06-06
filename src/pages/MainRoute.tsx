import { DashboardLayout } from "@layouts";
import Home from "@pages/home/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const MainRoute: React.FC = ({}) => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default MainRoute;
