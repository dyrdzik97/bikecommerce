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
        <div className='max-w-sm rounded-lg bg-white shadow transition-shadow hover:shadow-lg'>
            <a href={`/${url}`}>
                <img className='rounded-t-lg' src={imageSrc} alt='' />
            </a>
            <div className='p-5'>
                <div>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-black'>
                        {title}
                    </h5>
                </div>
                <p className='text-gray-700 text-gray-400 mb-3 font-normal'>
                    {subtitle}
                </p>
                <a
                    href={`/${url}`}
                    className='hover:bg-blue-800  inline-flex items-center rounded-lg bg-primary-100 px-3 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4'
                >
                    {buttonText}
                    <IconArrow />
                </a>
            </div>
        </div>
    );
};

export default CategoryTile;
