import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { isProductBelongsToGivenCategory } from '../../../mappers';

interface IListingHeaderProps {}

const ListingHeader = ({}: IListingHeaderProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation('listing');
  const { t: tNav } = useTranslation('nav');

  const isCorrectSearchedCategory = isProductBelongsToGivenCategory(
    router.query.category as string
  );

  const hasCategoryInQuery = Object.keys(router.query).length !== 0;

  const title = useMemo(() => {
    if (!isCorrectSearchedCategory && hasCategoryInQuery) {
      return t('wrongCategoryInfo');
    }

    if (isCorrectSearchedCategory) {
      return t('listingTitle', { category: tNav(`${router.query.category}`) });
    }

    return t('allProducts');
  }, []);

  return (
    <div>
      <h3 className='max-w-2xl text-4xl font-extrabold'>{title}</h3>
    </div>
  );
};

export default ListingHeader;
