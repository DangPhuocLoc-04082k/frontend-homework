import { StatusTag } from "@components/atoms";
import { InvoiceStatus } from "@enums";
import {
  Button,
  Input,
  Modal,
  Pagination,
  Table,
  TableColumnsType,
} from "antd";
import React, { useMemo, useState } from "react";
import { FaCheck, FaDownload, FaEye, FaFilePdf } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { GrScan } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import useInvoicesStore from "@zustand/invoices";
import { IFilter } from "../invoice-tool-bar/InvoiceToolBar";
import { toast } from "react-toastify";
import "../styles/table.scss";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

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
  contractor: string;
  prepared: string;
  format: string;
  bankAccount: string;
  dueDate: Date;
  payment: string;
  documentType: string;
}

interface DataType {
  key: React.Key;
  id: string;
  invoiceNumber: string;
  billed_to: string;
  invoice_date: Date;
  status: InvoiceStatus;
  vat: boolean;
  export: string;
  contractor: string;
}

const InvoicesTable: React.FC<InvoicesTableProps> = ({ filter }) => {
  const navigate = useNavigate();
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
        <div className="text-primary">
          {vat ? <FaCheck /> : <IoCloseSharp />}
        </div>
      ),
    },
    {
      title: "Export",
      dataIndex: "id",
      render: (id) => (
        <div className="flex items-center gap-2">
          <Button type="text" className="text-primary" style={{ padding: 0 }}>
            <FaDownload />
          </Button>
          <Button type="text" className="text-primary" style={{ padding: 0 }}>
            <FaFilePdf />
          </Button>
          <Button
            onClick={() => {
              navigate(`/invoices/edit/${id}`);
            }}
            type="text"
            className="text-primary"
            style={{ padding: 0 }}
          >
            <CiEdit />
          </Button>
          <Button
            onClick={() => {
              setIsModalSendEmail(true);
            }}
            type="text"
            className="text-primary"
            style={{ padding: 0 }}
          >
            <IoMdMail />
          </Button>
          <Button
            onClick={() => {
              navigate(`/invoices/${id}`);
              console.log("clikkck to", id);
            }}
            type="text"
            className="text-primary"
            style={{ padding: 0 }}
          >
            <FaEye />
          </Button>
        </div>
      ),
    },
  ];
  const [tableParams, setTableParams] = useState({
    current: 1,
    pageSize: 5,
  });
  const { invoices } = useInvoicesStore();
  const [isModalSendEmail, setIsModalSendEmail] = useState(false);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const tableData: DataType[] = useMemo(() => {
    const data: DataType[] = [];
    for (let index = 0; index < invoices.length; index++) {
      const element = invoices[index];
      console.log(
        "🚀 ~ consttableData:DataType[]=useMemo ~ element:",
        element,
        filter
      );
      data.push({
        key: index,
        id: element.id,
        invoiceNumber: element.invoiceNumber,
        billed_to: element.billTo,
        export: "",
        invoice_date: element.invoiceDate,
        status: element.status,
        vat: element.vat,
        contractor: element.contractor,
      });
    }
    return data.filter((item) => {
      // if (filter.type && item.type !== filter.type) return false;
      if (
        filter.contractors !== "all" &&
        item.contractor !== filter.contractors
      )
        return false;
      if (filter.vat !== null && item.vat !== filter.vat) return false;
      if (filter.from && item.invoice_date < new Date(filter.from))
        return false;
      if (filter.to && item.invoice_date > new Date(filter.to)) return false;
      if (filter.status !== null && item.status !== filter.status) return false;
      return true;
    });
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

  const handleSendToMail = () => {
    toast.success("Send successfully! Please check your email!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="invoice_table">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tableData}
        pagination={{
          current: tableParams.current,
          pageSize: tableParams.pageSize,
          pageSizeOptions: [10, 15, 20, 25],
        }}
        onChange={(pagination) => {
          console.log("🚀 ~ pagination:", pagination);
          setTableParams({
            pageSize: pagination.pageSize ?? 5,
            current: pagination.current ?? 1,
          });
        }}
        scroll={{ y: 540 }}
      />
      <Modal
        title="Send invoice to your email"
        okText="Send"
        open={isModalSendEmail}
        onOk={handleSendToMail}
        onCancel={() => {
          setIsModalSendEmail(false);
        }}
      >
        <p>Please Enter Your Email</p>
        <Input type="email" prefix={<IoMdMail />} />
      </Modal>
    </div>
  );
};
export default InvoicesTable;
