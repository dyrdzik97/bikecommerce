import { ReactNode } from 'react';

interface IMainProps {
  children: ReactNode;
}

const Main = ({ children }: IMainProps): JSX.Element => {
  return (
    <main
      className={
        'relative flex flex flex-col items-center justify-center md:mt-[100px]'
      }
    >
      {children}
    </main>
  );
};

export default Main;
