import { Field, FieldProps } from "formik";
import React, { ChangeEventHandler } from "react";

interface ComponentProps {
  label: string;
  name: string;
  displayInput?: string;
  disabled?: boolean;
  bg?: string;
  value?: string;
  asterisk?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  options?: React.ReactNode;
  placeholder?: string;
}

const Select: React.FC<ComponentProps> = (props) => {
  const {
    name,
    label,
    disabled,
    options,
    placeholder,
    asterisk = false,
  } = props;

  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <div className="flex flex-col">
          <label className="text-black text-base font-bold w-full text-left">
            {asterisk === true ? (
              <span>
                {label}
                <sup className="text-red-600 font-bold">*</sup>
              </span>
            ) : (
              label
            )}
          </label>

          <select {...field} disabled={disabled} className="border border-gray-300 rounded px-2 py-3">
            {!meta.value && <option value="">{placeholder}</option>}
            {options}
          </select>

          {meta.touched && meta.error && (
            <div className="text-red-600 font-bold text-sm">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default Select;
