import { StatusTag } from "@components/atoms";
import { InvoiceStatus } from "@enums";
import { Button, Table, TableColumnsType } from "antd";
import React, { useMemo, useState } from "react";
import { FaCheck, FaDownload, FaEye, FaFilePdf } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { GrScan } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import useInvoicesStore from "@zustand/invoices";
import { IFilter } from "../invoice-tool-bar/InvoiceToolBar";

interface InvoicesTableProps {
  filter: IFilter;
}

export interface IInvoice {
  id: string;
  invoiceNumber: string;
  billTo: string;
  invoiceDate: Date;
  status: InvoiceStatus;
  vat: boolean;
  note?: string;
}

interface DataType {
  key: React.Key;
  invoiceNumber: string;
  billed_to: string;
  invoice_date: Date;
  status: InvoiceStatus;
  vat: boolean;
  export: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Invoice ID",
    dataIndex: "invoiceNumber",
    sorter: (a, b) => a.invoiceNumber.localeCompare(b.invoiceNumber),
    render: (invoiceNumber: string) => <div>{invoiceNumber}</div>,
  },
  {
    title: "Billed to",
    dataIndex: "billed_to",
    sorter: (a, b) => a.billed_to.localeCompare(b.billed_to),
  },
  {
    title: "Invoice Date",
    dataIndex: "invoice_date",
    sorter: (a, b) => a.invoice_date.getTime() - b.invoice_date.getTime(),
    render: (invoice_date: Date) => (
      <div>{invoice_date.toLocaleDateString()}</div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status: InvoiceStatus) => <StatusTag status={status} />,
  },
  {
    title: "VAT",
    dataIndex: "vat",
    render: (vat: boolean) => (
      <div className="text-primary">{vat ? <FaCheck /> : <IoCloseSharp />}</div>
    ),
  },
  {
    title: "Export",
    dataIndex: "export",
    render: () => (
      <div className="flex items-center gap-2">
        <Button type="text" className="text-primary" style={{ padding: 0 }}>
          <FaDownload />
        </Button>
        <Button type="text" className="text-primary" style={{ padding: 0 }}>
          <FaFilePdf />
        </Button>
        <Button type="text" className="text-primary" style={{ padding: 0 }}>
          <GrScan />
        </Button>
        <Button type="text" className="text-primary" style={{ padding: 0 }}>
          <IoMdMail />
        </Button>
        <Button type="text" className="text-primary" style={{ padding: 0 }}>
          <FaEye />
        </Button>
      </div>
    ),
  },
];

const InvoicesTable: React.FC<InvoicesTableProps> = ({ filter }) => {
  const { invoices } = useInvoicesStore();
  console.log("🚀 ~ invoices:", invoices);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const tableData: DataType[] = useMemo(() => {
    const data: DataType[] = [];
    for (let index = 0; index < invoices.length; index++) {
      const element = invoices[index];
      console.log("🚀 ~ consttableData:DataType[]=useMemo ~ element:", element);
      data.push({
        key: index,
        invoiceNumber: element.invoiceNumber,
        billed_to: element.billTo,
        export: "",
        invoice_date: element.invoiceDate,
        status: element.status,
        vat: element.vat,
      });
    }
    return data;
  }, [invoices, filter]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
      />
    </div>
  );
};
export default InvoicesTable;
