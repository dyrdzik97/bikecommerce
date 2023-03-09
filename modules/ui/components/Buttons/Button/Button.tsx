import classNames from 'classnames';
import { forwardRef, PropsWithChildren, ReactNode, Ref } from 'react';

interface IButtonProps {
  children?: ReactNode;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
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
    large: 'px-6 py-3 text-xl',
  },
  variant: {
    primary: 'bg-primary-100 hover:bg-primary-300 text-black',
    secondary: 'bg-secondary-100 hover:bg-secondary-300 text-black',
    tertiary: 'bg-tertiary-100 hover:bg-tertiary-300 text-white',
    transparent: 'bg-transparent border border-orimary-500 ',
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
