interface ISpecificationItemProps {
  items: {
    title: string;
    value: string;
  }[];
}

const SpecificationItem = ({ items }: ISpecificationItemProps): JSX.Element => {
  // add translations in i18n by title
  return (
    <>
      {items.map((item, index) => (
        <span className='my-5 flex flex-row gap-5' key={index}>
          <p className='font-2xl'>{item.title}:</p>
          <p className='font-medium'>{item.value}</p>
        </span>
      ))}
    </>
  );
};

export default SpecificationItem;
