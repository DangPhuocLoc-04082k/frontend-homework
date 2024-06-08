import { DashboardLayout } from "@layouts";
import Home from "@pages/home/Home";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import InvoicesCreate from "./invoices-create/InvoicesCreate";
import InvoicesEdit from "./invoices-edit/InvoicesEdit";
import Contractors from "./contractors/Contractors";
import Invoices from "./invoices/Invoices";
import ContractorsCreate from "./contractors-create/ContractorsCreate";
import ContractorsEdit from "./contractors-edit/ContractorsEdit";
import InvoiceDetails from "./invoice-details/InvoiceDetails";

const MainRoute: React.FC = ({}) => {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoices/create" element={<InvoicesCreate />} />
          <Route path="/invoices/edit/:id" element={<InvoicesEdit />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/contractors/create" element={<ContractorsCreate />} />
          <Route path="/contractors/edit" element={<ContractorsEdit />} />
          <Route path="/invoices/:id" element={<InvoiceDetails />} />
        </Route>
      </Routes>
    </>
  );
};
export default MainRoute;
