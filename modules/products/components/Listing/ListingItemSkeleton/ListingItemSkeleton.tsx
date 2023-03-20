import { FC } from 'react';

import classNames from 'classnames';
import ContentLoader from 'react-content-loader';

interface IListingItemSkeletonProps {
  size?: 'small' | 'regular';
  height?: string;
}

const ListingItemSkeleton: FC<IListingItemSkeletonProps> = ({
  size = 'regular',
  height,
}) => {
  const classes = classNames(
    {
      'h-[480px]': size === 'regular',
      'h-[320px]': size === 'small',
    },
    'listing-item-skeleton'
  );

  return (
    <div
      style={{
        height,
      }}
      className={classes}
    >
      <ContentLoader
        className={'h-full w-full'}
        viewBox='0 0 408 462'
        uniqueKey={'listing-item-skeleton'}
        foregroundColor={'#BABABA'}
        backgroundColor={'#BABABA'}
      >
        <rect x='0' y='0' rx='16' ry='16' width='408' height='310' />
        <rect x='16' y='330' rx='12' ry='12' width='67' height='24' />
        <rect x='16' y='368' rx='24' ry='24' width='376' height='48' />
        <rect x='16' y='430' rx='16' ry='16' width='151' height='32' />
        <rect x='286' y='430' rx='16' ry='16' width='104' height='32' />
      </ContentLoader>
    </div>
  );
};

export default ListingItemSkeleton;
