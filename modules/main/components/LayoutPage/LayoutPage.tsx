import { ReactNode } from 'react';

interface ILayoutPageProps {
  size?: 'narrow' | 'wide';
  children: ReactNode;
  padding?: string;
  title?: string;
  subtitle?: string;
}

const LayoutPage = ({
  size = 'narrow',
  children,
  padding,
  title,
  subtitle,
}: ILayoutPageProps): JSX.Element => {
  return (
    <div
      className={`'md:p-20 relative col-span-6 flex shrink-0 flex-col gap-2 p-4 md:items-center md:justify-center ${
        padding ? padding : 'p-0'
      }
      ${size !== 'narrow' ? 'w-full' : 'lg::11/12 md:w-9/12'}`}
    >
      <div className={'flex flex-col items-center justify-center'}>
        {title && (
          <h3 className='max-w-2xl text-4xl font-extrabold'>{title}</h3>
        )}
        {subtitle && (
          <span className={'max-w-1xl text-xl font-light text-tertiary-100'}>
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default LayoutPage;
