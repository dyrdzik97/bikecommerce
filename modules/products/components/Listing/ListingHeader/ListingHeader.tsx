import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { getQueryParams } from '../../../../../utils/router';
import { isProductBelongsToGivenCategory } from '../../../mappers';

interface IListingHeaderProps {}

const ListingHeader = ({}: IListingHeaderProps): JSX.Element => {
  const router = useRouter();
  const { t } = useTranslation('listing');
  const { t: tNav } = useTranslation('nav');

  const queryParams = useMemo(
    () => getQueryParams(router.asPath),
    [router.asPath]
  );

  const isCorrectSearchedCategory = isProductBelongsToGivenCategory(
    queryParams.category as string
  );

  const hasCategoryInQuery = Object.keys(queryParams).length !== 0;

  const title = useMemo(() => {
    if (!isCorrectSearchedCategory && hasCategoryInQuery) {
      return t('wrongCategoryInfo');
    }

    if (isCorrectSearchedCategory) {
      return t('listingTitle', { category: tNav(queryParams.category) });
    }

    return t('allProducts');
  }, []);

  return (
    <div>
      <h3 className='mb-4 max-w-2xl text-4xl font-extrabold'>{title}</h3>
    </div>
  );
};

export default ListingHeader;
