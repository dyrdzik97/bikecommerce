interface IAddToCartButtonProps {
  onClick?: () => void;
}

const AddToCartButton = ({ onClick }: IAddToCartButtonProps) => {
  return (
    <button
      className='border-gray-900 rounded-full border-2 px-6 py-2 uppercase transition duration-200 ease-in hover:bg-primary-100 focus:outline-none'
      onClick={onClick}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
