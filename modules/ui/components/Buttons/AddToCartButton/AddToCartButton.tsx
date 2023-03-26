import IconBasket from '../../../../main/utils/Icons/IconBasket/IconBasket';

interface IAddToCartButtonProps {
  onClick?: () => void;
}

const AddToCartButton = ({ onClick }: IAddToCartButtonProps) => {
  return (
    <button
      className='border-gray-900 rounded-full border-2 p-2 transition duration-200 ease-in hover:bg-primary-100 focus:outline-none'
      onClick={onClick}
    >
      <IconBasket />
    </button>
  );
};

export default AddToCartButton;
