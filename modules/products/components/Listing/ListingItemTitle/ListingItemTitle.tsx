interface IListingItemTitleProps {
  title: string;
}

const ListingItemTitle = ({ title }: IListingItemTitleProps): JSX.Element => {
  return (
    <div className='flex items-start justify-start text-lg font-semibold'>
      <span className='overflow-hidden text-ellipsis'>{title}</span>
    </div>
  );
};

export default ListingItemTitle;
