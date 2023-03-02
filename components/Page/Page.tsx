import { ReactNode } from 'react';

interface IPageProps {
  size?: 'narrow' | 'wide';
  children: ReactNode;
}

const Page = ({ size = 'narrow', children }: IPageProps): JSX.Element => {
  return (
    <div
      className={`relative inline-block flex shrink-0 justify-center ${
        size !== 'narrow' ? 'w-full' : 'w-9/12'
      }`}
    >
      {children}
    </div>
  );
};

export default Page;
