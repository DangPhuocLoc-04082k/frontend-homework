import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label?: string;
  placeHolder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, label, placeHolder }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            variant="borderless"
            placeholder={placeHolder}
            className="bg-gray"
          />
        )}
      />
    </div>
  );
};
export default FormInput;
