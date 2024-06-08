import { IFilter, InvoiceToolBar, InvoicesTable } from "@components/organisms";
import { InvoiceStatus } from "@enums";
import React, { useState } from "react";

const Invoices: React.FC = ({}) => {
  const [filter, setFilter] = useState<IFilter>({
    type: "",
    contractors: "all",
    vat: false,
    from: "",
    to: "",
    status: null,
  });

  return (
    <div className="w-full h-full bg-gray rounded-tl-xl p-4">
      <InvoiceToolBar setFilter={setFilter} filter={filter} />
      <InvoicesTable filter={filter} />
    </div>
  );
};
export default Invoices;
