interface IQuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityButton = ({
  quantity,
  // availableQuantity, TODO - add in the future block for sold out products
  onIncrease,
  onDecrease,
}: IQuantityButtonProps): JSX.Element => {
  const zeroQuantity: boolean = quantity === 1;

  return (
    <div className='flex items-center rounded border border-lightgray'>
      <button
        type='button'
        className={`text-gray-600 h-10 w-10 transition hover:opacity-75 ${
          zeroQuantity && 'cursor-not-allowed'
        }`}
        onClick={onDecrease}
        disabled={zeroQuantity}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        type='button'
        className='h-10 text-gray-400 hover:bg-gray-100 w-10 transition hover:opacity-75'
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
