import { InvoiceStatus } from "@enums";
import { Button, DatePicker, Select } from "antd";
import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export interface IInvoiceType {
  label: string;
  value: string;
}

export interface IFilter {
  type: string;
  contractors: string;
  vat: boolean;
  from: string;
  to: string;
  status: InvoiceStatus | null;
}

interface InvoiceToolBarProps {
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
}

const InvoiceToolBar: React.FC<InvoiceToolBarProps> = ({
  filter,
  setFilter,
}) => {
  const navigate = useNavigate();

  const invoicesType = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Edit",
      value: "edit",
    },
    {
      label: "Inprogress",
      value: "inprogress",
    },
    {
      label: "Drafts",
      value: "drafts",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-3 mb-4">
      <div className="w-full flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {invoicesType.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  "p-2 rounded-md text-primary cursor-pointer transition duration-300 ease-in-out hover:bg-gray"
                )}
                onClick={() => {
                  setFilter((preFilter) => ({
                    ...preFilter,
                    type: item.value,
                  }));
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <Button
          onClick={() => {
            navigate("/invoices/create");
          }}
          style={{
            background:
              "linear-gradient(270deg, rgba(5,0,92,1) 0%, rgba(0,0,173,1) 49%, rgba(0,0,255,1) 100%)",
            color: "#fff",
          }}
          className="flex items-center"
          type="text"
        >
          <IoIosAddCircleOutline />
          Create a new invoice
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <Select
          placeholder="All Contractors"
          variant="borderless"
          style={{
            width: "fit-content",
            backgroundColor: "#f3f3fb",
            borderRadius: "8px",
            color: "#9194bd",
            fontWeight: "bold",
          }}
          onChange={(value) => {}}
          options={[
            { value: "happy_pets", label: "Happy pets LTD" },
            { value: "it_solutions", label: "IT Solutions LTD" },
            { value: "toprecruters", label: "Toprecruters LTD" },
          ]}
        />
        <Select
          variant="borderless"
          placeholder={"VAT"}
          style={{
            width: "fit-content",
            backgroundColor: "#f3f3fb",
            borderRadius: "8px",
            color: "#9194bd",
            fontWeight: "bold",
          }}
          onChange={(value) => {}}
          options={[
            { value: true, label: "Yes" },
            { value: false, label: "No" },
          ]}
        />
        <DatePicker
          placeholder="From"
          onChange={(date) => {
            console.log(date);
          }}
        />
        <DatePicker
          placeholder="To"
          onChange={(date) => {
            console.log(date);
          }}
        />
        <Select
          placeholder="All Statuses"
          variant="borderless"
          style={{
            width: "fit-content",
            backgroundColor: "#f3f3fb",
            borderRadius: "8px",
            color: "#9194bd",
            fontWeight: "bold",
          }}
          onChange={(value) => {}}
          options={[
            { value: InvoiceStatus.DRAFTS, label: "Drafts" },
            { value: InvoiceStatus.NOT_PAID, label: "Not paid" },
            { value: InvoiceStatus.PAID, label: "paid" },
          ]}
        />
      </div>
    </div>
  );
};
export default InvoiceToolBar;
