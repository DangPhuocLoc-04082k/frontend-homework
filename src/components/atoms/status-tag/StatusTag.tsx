import { InvoiceStatus } from "@enums";
import React, { useMemo } from "react";

interface StatusTagProps {
  status: InvoiceStatus;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const renderTag = useMemo(() => {
    switch (status) {
      case InvoiceStatus.DRAFTS:
        return (
          <div className="bg-[#fff9e3] px-3 py-1 rounded-md font-medium flex items-center justify-center text-primary">
            Draft
          </div>
        );
      case InvoiceStatus.NOT_PAID:
        return (
          <div className="bg-[#fff0f1] px-3 py-1 rounded-md font-medium flex items-center justify-center text-primary">
            Not paid
          </div>
        );
      case InvoiceStatus.PAID:
        return (
          <div className="bg-[#dafce4] px-3 py-1 rounded-md font-medium flex items-center justify-center text-primary">
            Paid
          </div>
        );
      case InvoiceStatus.LATE:
        return (
          <div className="bg-[#fff5c6] px-3 py-1 rounded-md font-medium flex items-center justify-center text-primary">
            Late
          </div>
        );
      case InvoiceStatus.OUTSTANDING:
        return (
          <div className="bg-[#938bff] px-3 py-1 rounded-md font-medium flex items-center justify-center text-primary">
            Outstanding
          </div>
        );

      default:
        return null;
    }
  }, [status]);

  return <div>{renderTag}</div>;
};
export default StatusTag;
