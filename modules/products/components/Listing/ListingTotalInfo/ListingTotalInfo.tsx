import { useTranslation } from 'next-i18next';

interface IListingTotalInfoProps {
  total: string;
}

const ListingTotalInfo = ({ total }: IListingTotalInfoProps): JSX.Element => {
  const { t } = useTranslation('listing');

  return (
    <span className='font-medium'>
      {t('productsCount')} {total}
    </span>
  );
};

export default ListingTotalInfo;
