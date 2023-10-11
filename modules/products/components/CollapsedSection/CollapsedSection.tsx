import classNames from 'classnames';
import { ReactNode, useState } from 'react';

interface ICollapsedSectionProps {
  title: string;
  children?: ReactNode;
  collapsed?: boolean;
}

const CollapsedSection = ({
  children,
  title,
  collapsed,
}: ICollapsedSectionProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState(collapsed);

  const collapsedClass = classNames({ hidden: !isOpened, visible: isOpened });
  const anchorClass = classNames('transform transition duration-120', {
    'rotate-180': isOpened,
    'rotate-360': !isOpened,
  });
  return (
    <div id='accordion-collapse' data-accordion='collapse'>
      <h2 id='accordion-collapse-heading-1'>
        <button
          type='button'
          className='text-gray-500 text-gray-400 hover:bg-gray-100 hover:bg-gray-800 mt-5 flex w-full items-center justify-between border-t p-5 text-left font-medium'
          data-accordion-target='#accordion-collapse-body-1'
          aria-expanded='true'
          aria-controls='accordion-collapse-body-1'
          onClick={() => setIsOpened((prev) => !prev)}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`h-6 w-6 shrink-0 ${anchorClass}`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id='accordion-collapse-body-1'
        className={collapsedClass}
        aria-labelledby='accordion-collapse-heading-1'
      >
        <div className='border-gray-200 border-gray-700 bg-gray-900 px-5 font-light'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsedSection;
