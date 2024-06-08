import { IInvoice } from "@components/organisms";
import { InvoiceStatus } from "@enums";
import useInvoicesStore from "@zustand/invoices";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v1 as uuidv1 } from "uuid";

type Props = {
  currentInvoice?: any;
};

interface IInvoiceForm {
  id: string;
  document_number: string;
  document_type: string;
  bill_to: string;
  prepared: string;
  contractor: string;
  note: string;
  format: string;
  bank_account: string;
  invoice_date: Date;
  due_date: Date;
  payment: string;
}

export default function useInvoices({ currentInvoice }: Props) {
  console.log("🚀 ~ useInvoices ~ currentInvoice:", currentInvoice);
  const methods = useForm<IInvoiceForm>({
    defaultValues: {
      id: currentInvoice?.id ?? "",
      document_number: currentInvoice?.invoiceNumber ?? "",
      document_type: currentInvoice?.documentType ?? "",
      bill_to: currentInvoice?.billTo ?? "",
      prepared: currentInvoice?.prepared ?? "",
      contractor: currentInvoice?.contractor ?? "",
      format: currentInvoice?.format ?? "",
      note: currentInvoice?.note ?? "",
      bank_account: currentInvoice?.bankAccount ?? "",
      invoice_date: currentInvoice?.invoiceDate ?? new Date(),
      due_date: currentInvoice?.due_date ?? new Date(),
      payment: currentInvoice?.payment ?? "",
    },
    reValidateMode: "onChange",
  });
  const { addInvoice, updateInvoice } = useInvoicesStore();
  const formData = methods.watch();
  console.log("🚀 ~ useInvoices ~ formData:", formData);

  const handleAddInvoice = useCallback(() => {
    addInvoice({
      billTo: formData.bill_to,
      id: uuidv1(),
      invoiceDate: formData.invoice_date,
      invoiceNumber: formData.document_number,
      status: InvoiceStatus.DRAFTS,
      vat: false,
      note: formData.note,
      contractor: formData.contractor,
      bankAccount: formData.bank_account,
      dueDate: formData.due_date,
      format: formData.format,
      payment: formData.payment,
      prepared: formData.prepared,
      documentType: formData.document_type,
    });

    toast.success("Create invoice Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }, [formData]);

  const handleUpdateInvoice = useCallback(() => {
    updateInvoice(currentInvoice.id, {
      billTo: formData.bill_to,
      id: uuidv1(),
      invoiceDate: formData.invoice_date,
      invoiceNumber: formData.document_number,
      status: InvoiceStatus.DRAFTS,
      vat: false,
      note: formData.note,
      contractor: formData.contractor,
      bankAccount: formData.bank_account,
      dueDate: formData.due_date,
      format: formData.format,
      payment: formData.payment,
      prepared: formData.prepared,
      documentType: formData.document_type,
    });

    toast.success("Update invoice Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  }, [formData, currentInvoice]);

  return { methods, formData, handleAddInvoice, handleUpdateInvoice };
}
