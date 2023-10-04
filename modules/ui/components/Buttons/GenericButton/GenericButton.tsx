import Link from 'next/link';
import { ReactNode } from 'react';
import IconLoading from '../../../../main/utils/Icons/IconLoading/IconLoading';

interface IGenericButtonProps {
  label: string;
  onClick?: () => void;
  filled?: boolean;
  className?: string;
  linkButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  icon?: ReactNode;
  size?: 'small' | 'large';
  isLoading?: boolean;
}

const ButtonWrapper = ({ children, linkButton, href }: any) => {
  if (linkButton) {
    return <Link href={href}>{children}</Link>;
  }

  return children;
};

const GenericButton = ({
  label,
  onClick,
  filled = false,
  className,
  type,
  linkButton = false,
  href = '',
  icon,
  size = 'large',
  isLoading = false,
}: IGenericButtonProps): JSX.Element => {
  if (linkButton) {
    return (
      <ButtonWrapper linkButton={linkButton} href={href}>
        <button
          type={type}
          className={`
            flex
            ${size === 'large' ? 'w-full' : 'w-fit'}
            items-center
            justify-center
            rounded-xl
            ${
              filled
                ? 'border border-[#002D74] bg-[#002D74] text-white'
                : 'border border-[#002D74] bg-white text-black'
            }
            gap-2 p-2 duration-300 hover:scale-105 ${className ? className : ''}
            ${
              isLoading ? 'border-tertiary-100 bg-tertiary-100' : 'bg-[#002D74]'
            }
            `}
          onClick={onClick}
          disabled={isLoading}
        >
          {icon}
          {isLoading && <IconLoading width={24} height={24} />}
          {label}
        </button>
      </ButtonWrapper>
    );
  }

  return (
    <button
      type={type}
      className={`
            flex
            ${size === 'large' ? 'w-full' : 'w-fit'}
            items-center
            justify-center
            rounded-xl
            ${
              filled
                ? 'border border-[#002D74] bg-[#002D74] text-white'
                : 'border border-[#002D74] bg-white text-black'
            }
            gap-2 p-2 duration-300 hover:scale-105 ${className ? className : ''}
            ${
              isLoading ? 'border-tertiary-100 bg-tertiary-100' : 'bg-[#002D74]'
            }
            `}
      onClick={onClick}
      disabled={isLoading}
    >
      {icon}
      {isLoading && <IconLoading width={24} height={24} />}
      {label}
    </button>
  );
};

export default GenericButton;
