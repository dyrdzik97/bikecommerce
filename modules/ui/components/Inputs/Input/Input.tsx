import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IInputProps {
  type?: string;
  label?: string;
  name: string;
  placeholder: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
  inputClassName?: string;
  pattern?: string;
  maxLength?: number;
  value?: string;
  required?: boolean;
}

const Input = ({
  type = 'text',
  label,
  name,
  placeholder,
  errors,
  register,
  className = '',
  inputClassName = '',
  pattern,
  maxLength,
  value,
  required = false,
}: IInputProps): JSX.Element => {
  return (
    <div
      className={`relative flex w-full flex-col ${
        label ? 'gap-1' : 'gap-0'
      } ${className}`}
    >
      {label && <label className='font-medium'>{label}</label>}
      <input
        className={`my-2 block w-full rounded-xl border bg-white p-2 outline-none ${inputClassName} ${
          errors[name] ? 'border border-[#ff0000]' : ''
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        pattern={pattern}
        maxLength={maxLength}
        value={value}
        required={required}
      />

      {errors[name] && (
        <p
          className='relative m-5'
          style={{ color: 'red', marginTop: 1, fontSize: 10 }}
        >
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;
