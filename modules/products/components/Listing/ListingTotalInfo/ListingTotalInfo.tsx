interface IListingTotalInfoProps {
  total: number;
}

const ListingTotalInfo = ({ total }: IListingTotalInfoProps): JSX.Element => {
  return <span className='font-medium'>Products: {total}</span>;
};

export default ListingTotalInfo;
