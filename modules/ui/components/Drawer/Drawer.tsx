import { ReactNode } from 'react';

interface IDrawerProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
  header: string;
}

const Drawer = ({ isOpen, setIsOpen, children, header }: IDrawerProps) => {
  return (
    <main
      className={
        'fixed inset-0 z-10 transform overflow-hidden bg-darkgray bg-opacity-25 ease-in-out ' +
        (isOpen
          ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
          : ' translate-x-full opacity-0 transition-all delay-500  ')
      }
    >
      <section
        className={
          ' h-full delay-400 absolute right-0 w-screen w-[500px] max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className='h-full relative flex max-w-lg flex-col gap-10 space-y-6 overflow-y-scroll px-4 py-10'>
          <header className='text-lg font-bold'>{header}</header>
          {children}
        </article>
      </section>
      <section
        className='h-screen w-screen bg-darkgray bg-opacity-50'
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
