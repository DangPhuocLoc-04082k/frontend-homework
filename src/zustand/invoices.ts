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
      contractor: "happy_pets",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asdasd",
      invoiceNumber: "002",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: true,
      contractor: "happy_pets",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asdasd22",
      invoiceNumber: "003",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: true,
      contractor: "happy_pets",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asdasd22",
      invoiceNumber: "005",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: false,
      contractor: "it_solutions",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asdasd2323",
      invoiceNumber: "001123",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      contractor: "it_solutions",
      vat: false,
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asdas123d",
      invoiceNumber: "012301",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: false,
      contractor: "it_solutions",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asda123sd",
      invoiceNumber: "001",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: true,
      contractor: "toprecruters",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
    },
    {
      id: "asda123sd",
      invoiceNumber: "001",
      billTo: "asdasd",
      invoiceDate: new Date(),
      status: InvoiceStatus.DRAFTS,
      vat: true,
      contractor: "toprecruters",
      bankAccount: "bank",
      dueDate: new Date(),
      format: "format",
      payment: "payment",
      prepared: "prepared",
      note: "note",
      documentType: "type1",
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
