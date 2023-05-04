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
  return (
    <>
      {!linkButton ? (
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
            p-2 duration-300 hover:scale-105 ${className ? className : ''}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {icon}
          {isLoading && <IconLoading width={32} height={32} />}
          {label}
        </button>
      ) : (
        <Link href={href}>
          <button
            type={type}
            className={`
                flex
                    w-full
                    items-center
                    justify-center
                    rounded-xl
                ${
                  filled
                    ? 'border border-[#002D74] bg-[#002D74] text-white'
                    : 'border border-[#002D74] bg-white text-black'
                }
                p-2 duration-300 hover:scale-105 ${className ? className : ''}`}
            disabled={isLoading}
          >
            {icon}
            {label}
          </button>
        </Link>
      )}
    </>
  );
};

export default GenericButton;
