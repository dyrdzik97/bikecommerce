import { SyntheticEvent } from 'react';

import Link from 'next/link';

export interface IDropdownListItemProps {
  title: string;
  href?: string;
  dataTest?: string;
  passHref?: boolean;
  target?: string;
  action?: (event: SyntheticEvent) => void;
}

const DropdownListItem = ({
  title,
  href,
  passHref,
  target,
  dataTest,
  action,
}: IDropdownListItemProps) => {
  if (href) {
    return (
      <li>
        <Link
          href={href}
          className='text-gray-700 hover:bg-gray-100 text-gray-200 block px-4 py-2 text-sm hover:bg-darkgray hover:text-black'
          target={target}
          rel='noreferrer'
          passHref={passHref}
          onClick={action}
        >
          {title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        className='text-gray-700 hover:bg-gray-100 text-gray-200 block px-4 py-2 text-sm hover:bg-darkgray hover:text-black'
        onClick={action}
      >
        {title}
      </button>
    </li>
  );
};

export default DropdownListItem;
