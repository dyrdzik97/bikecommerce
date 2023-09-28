import classNames from 'classnames';
import { forwardRef, PropsWithChildren, ReactElement, Ref } from 'react';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  size: 'small' | 'normal' | 'large';
  pill?: boolean;
  disabled: boolean;
  ref: Ref<HTMLDivElement>;
  label?: string;
  icon?: ReactElement;
  onClick?: () => void;
}

const classes = {
  base: 'order-transparent inline-flex items-center w-full justify-center rounded-md border-2 bg-tertiary-300 px-12 py-3 text-center text-base font-bold transition-all duration-200 ease-in-out hover:bg-tertiary-200 focus:shadow',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-lg',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-5 py-3 font-medium',
    large: 'px-6 py-3 text-xl',
  },
  variant: {
    primary: 'bg-primary-100 hover:bg-primary-300 text-black',
    secondary: 'bg-secondary-100 hover:bg-secondary-300 text-black',
    tertiary: 'bg-tertiary-100 hover:bg-tertiary-300 text-white',
    transparent:
      'bg-transparent border border-primary-500 hover:bg-gray hover:underline',
  },
};

const Button = forwardRef<HTMLDivElement, PropsWithChildren<IButtonProps>>(
  (
    {
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill = false,
      disabled = false,
      label,
      icon,
      onClick,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={classNames(`
            ${classes.base}
            ${classes.size[size]}
            ${classes.variant[variant]}
            ${pill && classes.pill}
            ${disabled && classes.disabled}
            ${className}
        `)}
      onClick={onClick}
      {...props}
    >
      <>
        {icon}
        {label}
      </>
    </button>
  )
);

export default Button;
