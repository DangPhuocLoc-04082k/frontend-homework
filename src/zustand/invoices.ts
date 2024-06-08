import { IInvoice } from "@components/organisms";
import { InvoiceStatus } from "@enums";
import { create } from "zustand";

interface IInvoiceStore {
  invoices: IInvoice[];
  addInvoice: (invoice: IInvoice) => void;
  updateInvoice: (id: string, updatedInvoice: Partial<IInvoice>) => void;
  deleteInvoice: (id: string) => void;
}

const useInvoicesStore = create<IInvoiceStore>((set) => ({
  invoices: [
    {
      id: "asdasd",
      invoiceNumber: "001",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: true,
    },
  ],
  addInvoice: (invoice) =>
    set((state) => {
      console.log("get in adddd", [...state.invoices, invoice]);
      return {
        invoices: [...state.invoices, invoice],
      };
    }),
  updateInvoice: (id, updatedInvoice) =>
    set((state) => {
      console.log("get in update");
      return {
        invoices: state.invoices.map((invoice) =>
          invoice.id === id ? { ...invoice, ...updatedInvoice } : invoice
        ),
      };
    }),
  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter((invoice) => invoice.id !== id),
    })),
}));

export default useInvoicesStore;
