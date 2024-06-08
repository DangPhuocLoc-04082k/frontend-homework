import { FormDatePicker, FormInput } from "@components/atoms";
import FormSelect from "@components/atoms/form-select/FormSelect";
import useInvoices from "@hooks/useInvoices";
import { Button, Typography } from "antd";
import React from "react";
import { FormProvider } from "react-hook-form";
import { FaFileInvoiceDollar, FaMoneyBillWave } from "react-icons/fa6";

interface CreateInvoiceFormProps {}

const CreateInvoiceForm: React.FC<CreateInvoiceFormProps> = ({}) => {
  const { methods, handleAddInvoice, formData } = useInvoices({});

  return (
    <div className="bg-white rounded-lg p-3 mb-4">
      <FormProvider {...methods}>
        <form className="h-full">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
              <FormInput name="document_number" placeHolder="Document number" />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="document_type"
                placeHolder="Document type"
                options={[
                  {
                    label: "asdasd",
                    value: "valuieasdasd",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="prepared"
                placeHolder="Prepared"
                options={[
                  {
                    label: "prepared",
                    value: "prepared",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="contractor"
                placeHolder="Contractor"
                options={[
                  { value: "happy_pets", label: "Happy pets LTD" },
                  { value: "it_solutions", label: "IT Solutions LTD" },
                  { value: "toprecruters", label: "Toprecruters LTD" },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="format"
                placeHolder="Format"
                options={[
                  {
                    label: "format",
                    value: "format",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="bank_account"
                placeHolder="Bank account"
                options={[
                  {
                    label: "Bank account",
                    value: "bank1",
                  },
                ]}
              />
            </div>
            <div className="col-span-1">
              <FormDatePicker name="invoice_date" placeHolder="Invoice date" />
            </div>
            <div className="col-span-1">
              <FormDatePicker name="due_date" placeHolder="Due date" />
            </div>
            <div className="col-span-1">
              <FormSelect
                name="payment"
                placeHolder="Payment"
                options={[
                  {
                    label: "Payment1",
                    value: "payment1",
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-full absolute left-3 bottom-3 bg-white rounded-lg flex items-center justify-between p-3">
            <div className="flex items-center gap-2 text-primary">
              <div className="flex items-center gap-1">
                <FaFileInvoiceDollar />
                Tax base
              </div>
              <div
                style={{ borderRight: "2px solid #112f6f" }}
                className="pr-2"
              >
                288 GBN
              </div>
              <div
                style={{ borderRight: "2px solid #112f6f" }}
                className="pr-2 flex items-center gap-5"
              >
                <Typography className="text-primary">%VAT</Typography>
                <Typography className="text-primary">72BGN</Typography>
              </div>
              <div className="px-2 flex items-center gap-5 font-bold">
                <Typography className="text-primary flex items-center gap-1 ">
                  <FaMoneyBillWave />
                  Total
                </Typography>
                <Typography className="text-primary">360BGN</Typography>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  methods.handleSubmit(handleAddInvoice)();
                }}
                style={{
                  background:
                    "linear-gradient(270deg, rgba(5,0,92,1) 0%, rgba(0,0,173,1) 49%, rgba(0,0,255,1) 100%)",
                  color: "#fff",
                }}
              >
                Save
              </Button>
              <Button>Save as draft</Button>
              <Button type="text">Cancel</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default CreateInvoiceForm;
