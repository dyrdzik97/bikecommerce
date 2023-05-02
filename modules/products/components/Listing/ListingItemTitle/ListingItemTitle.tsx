interface IListingItemTitleProps {
  title: string;
}

const ListingItemTitle = ({ title }: IListingItemTitleProps): JSX.Element => {
  return (
    <div className='flex items-start justify-start text-lg font-semibold'>
      <div className='overflow-hidden text-ellipsis'>{title}</div>
    </div>
  );
};

export default ListingItemTitle;
