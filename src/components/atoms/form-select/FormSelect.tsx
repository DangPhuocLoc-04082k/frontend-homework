import { Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormSelectProps {
  name: string;
  label?: string;
  placeHolder?: string;
  options: any[];
  defaultValue?: any;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  placeHolder,
  options,
  defaultValue,
}) => {
  const { setValue } = useFormContext();

  return (
    <div>
      <Select
        placeholder={placeHolder}
        variant="borderless"
        className="w-full bg-gray rounded-md"
        defaultValue={defaultValue}
        onChange={(value) => {
          setValue(name, value);
        }}
        options={options}
      />
    </div>
  );
};
export default FormSelect;
