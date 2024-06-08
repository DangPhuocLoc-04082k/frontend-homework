import { CreateInvoiceForm } from "@components/organisms";
import React from "react";

const InvoicesCreate: React.FC = ({}) => {
  return (
    <div className="relative w-full h-full bg-gray rounded-tl-xl p-4">
      <CreateInvoiceForm />
    </div>
  );
};
export default InvoicesCreate;
