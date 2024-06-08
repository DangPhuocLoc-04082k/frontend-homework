import { IInvoice } from "@components/organisms";
import { InvoiceStatus } from "@enums";
import useInvoicesStore from "@zustand/invoices";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v1 as uuidv1 } from "uuid";

type Props = {};

interface IInvoiceForm {
  id: string;
  document_number: string;
  document_type: string;
  prepared: string;
  contractor: string;
  format: string;
  bank_account: string;
  invoice_date: Date;
  due_date: Date;
  payment: string;
}

export default function useInvoices({}: Props) {
  const methods = useForm<IInvoiceForm>({
    defaultValues: {
      id: "",
      document_number: "",
      document_type: "",
      prepared: "",
      contractor: "",
      format: "",
      bank_account: "",
      invoice_date: new Date(),
      due_date: new Date(),
      payment: "",
    },
    reValidateMode: "onChange",
  });
  const { addInvoice } = useInvoicesStore();
  const formData = methods.watch();

  const handleAddInvoice = useCallback(() => {
    console.log("🚀 ~ useInvoices ~ formData:", formData);
    addInvoice({
      billTo: "",
      id: uuidv1(),
      invoiceDate: formData.invoice_date,
      invoiceNumber: formData.document_number,
      status: InvoiceStatus.DRAFTS,
      vat: false,
      note: "",
    });

    toast.success("Create invoice Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    methods.resetField("prepared");

    methods.reset({
      id: "",
      document_number: "",
      document_type: "",
      prepared: "",
      contractor: "",
      format: "",
      bank_account: "",
      invoice_date: new Date(),
      due_date: new Date(),
      payment: "",
    });
  }, [formData]);

  return { methods, formData, handleAddInvoice };
}
