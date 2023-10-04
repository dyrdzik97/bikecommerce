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
}: IInputProps): JSX.Element => {
  return (
    <div
      className={`relative flex w-full flex-col ${
        label ? 'gap-1' : 'gap-0'
      } ${className}`}
    >
      {label && <label className='font-medium'>{label}</label>}
      <input
        className={`my-2 block w-full rounded-xl border bg-white p-2 outline-none ${inputClassName}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        pattern={pattern}
        maxLength={maxLength}
        value={value}
        required
      />

      {errors[name] && (
        <p
          className='absolute bottom-[-20px]'
          style={{ color: 'red', marginTop: 1, fontSize: 10 }}
        >
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;
