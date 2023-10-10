import Image from 'next/image';
import Link from 'next/link';
import IconArrow from '../../../main/utils/Icons/IconArrow/IconArrow';
import { ICategoryTileProps } from '../../models';

const CategoryTile = ({
  imageSrc,
  title,
  url,
  subtitle,
  buttonText,
}: ICategoryTileProps): JSX.Element => {
  return (
    <div className='h-full hover:shadow-lg relative flex max-w-sm flex-col justify-between gap-5 rounded-lg bg-white shadow-custom transition-shadow'>
      <div className='h-2/4 relative'>
        <Link href={`/${url}`}>
          <Image
            className='h-[340px] rounded-t-lg object-cover'
            src={imageSrc}
            alt=''
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className='h-2/4 flex flex-col items-start justify-start p-5'>
        <div>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
            {title}
          </h5>
        </div>
        <p className='text-gray-700 text-gray-400 mb-3 font-normal'>
          {subtitle}
        </p>
        <Link
          href={`/${url}`}
          className='inline-flex items-center rounded-lg bg-primary-100 px-3 py-2 text-center text-sm font-medium hover:bg-primary-200 focus:outline-none focus:ring-4'
        >
          {buttonText}
          <IconArrow />
        </Link>
      </div>
    </div>
  );
};

export default CategoryTile;
