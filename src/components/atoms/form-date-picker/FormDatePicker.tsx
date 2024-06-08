import { DatePicker } from "antd";
import dayjs from "dayjs";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormDatePickerProps {
  name: string;
  placeHolder?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  name,
  placeHolder,
}) => {
  const { setValue } = useFormContext();

  return (
    <div>
      <DatePicker
        placeholder={placeHolder}
        variant="borderless"
        className="w-full bg-gray"
        format="YYYY-MM-DD"
        onChange={(date) => {
          setValue(name, dayjs(date).toDate());
        }}
      />
    </div>
  );
};
export default FormDatePicker;
