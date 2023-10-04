import IconBasket from '../../../../main/utils/Icons/IconBasket/IconBasket';
import IconLoading from '../../../../main/utils/Icons/IconLoading/IconLoading';

interface IAddToCartButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const AddToCartButton = ({ onClick, isLoading }: IAddToCartButtonProps) => {
  return (
    <button
      className='border-gray-900 z-20 items-center justify-center rounded-full border-2 p-2 transition duration-200 ease-in hover:bg-primary-100 focus:outline-none'
      onClick={(evt) => {
        evt.preventDefault();
        onClick();
      }}
    >
      {isLoading ? <IconLoading width={32} height={32} /> : <IconBasket />}
    </button>
  );
};

export default AddToCartButton;
