import { useTranslation } from 'next-i18next';

interface ISpecificationItemProps {
  items: {
    title: string;
    value: string;
  }[];
}

const SpecificationItem = ({ items }: ISpecificationItemProps): JSX.Element => {
  const { t } = useTranslation('product');
  return (
    <>
      {items.map((item, index) => (
        <span className='my-5 flex flex-row gap-5' key={index}>
          <p className='font-2xl'>{t(`${item.title}`)}:</p>
          <p className='font-medium'>{t(`${item.value}`)}</p>
        </span>
      ))}
    </>
  );
};

export default SpecificationItem;
