import { useRouter } from 'next/router';

interface IListingTotalInfoProps {
  total: string;
}

const ListingTotalInfo = ({ total }: IListingTotalInfoProps): JSX.Element => {
  const { isFallback } = useRouter();

  return <span className='font-medium'>Products: {total}</span>;
};

export default ListingTotalInfo;
