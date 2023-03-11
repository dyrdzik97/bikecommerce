import { FC, ReactNode } from 'react';

import classNames from 'classnames';
import Image from 'next/image';

interface IProductPhotoProps {
  padding?: string;
  src: string;
  alt: string;
  children?: ReactNode;
}

const ProductPhoto: FC<IProductPhotoProps> = ({
  padding,
  src,
  alt,
  children,
}) => {
  const classes = classNames('relative', padding);

  return (
    <div className={classes}>
      <Image
        src={src}
        alt={alt}
        width='412'
        height='328'
        // layout='fill'
        // objectFit='cover'
      />
      {children}
    </div>
  );
};

export default ProductPhoto;
