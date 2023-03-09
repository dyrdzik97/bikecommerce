import classNames from 'classnames';
import { forwardRef, PropsWithChildren, ReactNode, Ref } from 'react';

interface IButtonProps {
  children?: ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  variant: 'primary' | 'secondary' | 'danger';
  size: 'small' | 'normal' | 'large';
  pill?: boolean;
  disabled: boolean;
  ref: Ref<HTMLDivElement>;
}

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300',
  disabled: 'opacity-50 cursor-not-allowed',
  pill: 'rounded-lg',
  size: {
    small: 'px-2 py-1 text-sm',
    normal: 'px-5 py-3 font-medium',
    large: 'px-6 py-3 text-lg',
  },
  variant: {
    primary:
      'bg-gold hover:bg-primary-200 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black',
    secondary: 'bg-gray hover:bg-primary-800 text-gray-900',
    danger: 'bg-red hover:bg-redtext-black',
  },
};

const Button = forwardRef<HTMLDivElement, PropsWithChildren<IButtonProps>>(
  (
    {
      children,
      type = 'button',
      className,
      variant = 'primary',
      size = 'normal',
      pill = false,
      disabled = false,
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
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;
