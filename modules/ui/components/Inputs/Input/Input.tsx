import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IInputProps {
  type?: string;
  name: string;
  placeholder: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  className?: string;
  inputClassName?: string;
}

const Input = ({
  type = 'text',
  name,
  placeholder,
  errors,
  register,
  className,
  inputClassName,
}: IInputProps): JSX.Element => {
  return (
    <div className={`relative flex w-full flex-col gap-1 ${className}`}>
      <input
        className={`mt-1 rounded-xl border bg-white p-2 ${inputClassName}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <p style={{ color: 'red', marginTop: 1, fontSize: 10 }}>
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;
