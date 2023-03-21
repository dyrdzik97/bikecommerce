interface IProductTitleProps {
  title: string;
}

const ProductTitle = ({ title }: IProductTitleProps): JSX.Element => {
  return (
    <h1 className='sm: text-gray-900 text-2xl font-bold sm:text-3xl'>
      {title}
    </h1>
  );
};

export default ProductTitle;
