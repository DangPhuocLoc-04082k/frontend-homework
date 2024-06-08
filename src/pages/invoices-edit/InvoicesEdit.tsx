import { CreateInvoiceForm } from "@components/organisms";
import useInvoicesStore from "@zustand/invoices";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const InvoicesEdit: React.FC = () => {
  const params = useParams();
  const { invoices } = useInvoicesStore();
  console.log("🚀 ~ params:", params, invoices);

  const currentInvoice = useMemo(() => {
    return invoices.find((item) => item.id === params.id);
  }, [invoices, params]);
  console.log("🚀 ~ currentInvoice ~ currentInvoice:", currentInvoice);

  return (
    <div className="relative w-full h-full bg-gray rounded-tl-xl p-4">
      <CreateInvoiceForm currentInvoice={currentInvoice} />
    </div>
  );
};
export default InvoicesEdit;
