interface IScrollToTopButtonProps {
  onClick: () => void;
  showButton: boolean;
}

const ScrollToTopButton = ({
  onClick,
  showButton,
}: IScrollToTopButtonProps) => {
  return (
    <button
      className={`h-14 fixed bottom-10 right-10 z-50 w-14 rounded-full border-0 bg-primary-100 p-4 text-lg font-semibold shadow-md transition-all duration-300 hover:bg-primary-300 ${
        showButton ? 'block' : 'hidden'
      }`}
      onClick={onClick}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-6 w-6'
      >
        <path d='M12 4l8 8h-6v8h-4v-8H4l8-8z' />
      </svg>
      <span className='sr-only'>Go to top</span>
    </button>
  );
};

export default ScrollToTopButton;
