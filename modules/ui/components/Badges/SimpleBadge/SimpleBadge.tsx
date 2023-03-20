import { CSSProperties, ReactNode } from 'react';

import classNames from 'classnames';

interface IBadgeProps {
  size?: 'small' | 'regular';
  border?: boolean;
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  margin?: string;
  children?: ReactNode;
}

const SimpleBadge = ({
  size = 'regular',
  color = 'text-gray',
  backgroundColor = 'white',
  border = false,
  borderColor = 'background-tertiary-300',
  margin,
  children,
}: IBadgeProps) => {
  const classes = classNames(
    'grid grid-flow-col gap gap-1 items-center w-fit inline-block px-2 rounded-md whitespace-nowrap text-sm',
    {
      'border border-tertiary-300 items-center justify-items-center': border,
      'h-6': size === 'regular',
      'h-5': size === 'small',
    },
    margin
  );

  const styles: CSSProperties = {
    color,
    backgroundColor,
    borderColor,
  };

  return (
    <div className={classes} style={styles}>
      {children}
    </div>
  );
};

export default SimpleBadge;
