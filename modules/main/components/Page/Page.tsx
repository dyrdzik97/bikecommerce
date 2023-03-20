import { ReactNode } from 'react';

interface IPageProps {
  size?: 'narrow' | 'wide';
  children: ReactNode;
  padding?: string;
  title?: string;
  subtitle?: string;
}

const Page = ({
  size = 'narrow',
  children,
  padding,
  title,
  subtitle,
}: IPageProps): JSX.Element => {
  return (
    <div
      className={`'md:p-20 relative col-span-6 flex shrink-0 flex-col gap-10 p-4 md:items-center md:justify-center  ${padding}
      ${size !== 'narrow' ? 'w-full' : 'md:w-9/12'}`}
    >
      <div className={'flex flex-col items-center justify-center gap-5'}>
        {title && (
          <h3 className='mb-4 max-w-2xl text-4xl font-extrabold'>{title}</h3>
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

export default Page;
