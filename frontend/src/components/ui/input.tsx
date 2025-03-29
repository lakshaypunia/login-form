import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type PasswordInputProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  type : string;
  name: string;
  placeholder: string;
  className: string;
};

const Input: React.FC<PasswordInputProps> = ({
  register,
  type,
  errors,
  name ,
  placeholder ,
  className
}) => {


    
  return (
    <div>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
        className={`w-full h-12 border py-3 px-3.5 rounded-lg bg-white ${className}`}
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message as string}</p>}
    </div>
  );
};

export default Input;
