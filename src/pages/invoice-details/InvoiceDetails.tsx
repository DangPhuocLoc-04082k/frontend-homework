import { StatusTag } from "@components/atoms";
import useInvoicesStore from "@zustand/invoices";
import React, { useMemo } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

const InvoiceDetails: React.FC = () => {
  const { invoices } = useInvoicesStore();
  const params = useParams();
  console.log("🚀 ~ params:", params, invoices);

  const currentInvoice = useMemo(() => {
    return invoices.find((item) => item.id === params.id);
  }, [invoices, params]);

  return (
    <div className="w-full h-full bg-gray rounded-tl-xl p-4">
      {currentInvoice && (
        <div>
          <p>Invoice Number: {currentInvoice.invoiceNumber}</p>
          <p>Bill To: {currentInvoice.billTo}</p>
          <p>Invoice Date: {currentInvoice.invoiceDate.toLocaleDateString()}</p>
          <p>Status: {currentInvoice.status}</p>
          <p>VAT: {currentInvoice.vat ? <FaCheck /> : <IoCloseSharp />}</p>
          <p>Note: {currentInvoice.note}</p>
        </div>
      )}
    </div>
  );
};
export default InvoiceDetails;
