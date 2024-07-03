import { InputHTMLAttributes, ReactNode, useState } from "react";
import { FieldHookConfig, useField } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  displayInput?: string;
  className?: string;
  labelClassName?: string;
  type?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const Input = (props: InputProps & FieldHookConfig<string> & any) => {
  const { name, icon, placeholder, label, type, displayInput, className, labelClassName, disabled, ...rest } = props;
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const inputTypes = ["text", "password", "textArea", "date"];

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  let inputClassName = "border border-black px-3 py-4 bg-white w-full rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50";

  return (
    <div className="flex flex-col w-full gap-2 mb-4">
      <label className="text-gray-700 text-lg font-bold w-full mb-0 text-left">{label}</label>

      {displayInput === inputTypes[0] && <input {...field} className={inputClassName} placeholder={placeholder} type={type} disabled={disabled} />}

      {displayInput === inputTypes[1] && (
        <div className="relative">
          <input
            {...field}
            className={inputClassName}
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            {...rest}
          />

          <button className="absolute top-40% right-8 bg-transparent border-none" onClick={handleShowPassword} type="button">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      )}

      {displayInput === inputTypes[2] && <textarea className={inputClassName} {...field} placeholder={placeholder} rows={4} />}

      {displayInput === inputTypes[3] && <input {...field} className={inputClassName} placeholder={placeholder} type="date" disabled={disabled} {...rest} />}

      {meta.touched && meta.error && <div className="text-red-600 font-bold text-sm">{meta.error}</div>}
    </div>
  );
};

export default Input;
