import IconCart from '../../../../main/utils/Icons/IconCart/IconCart';
import IconLoading from '../../../../main/utils/Icons/IconLoading/IconLoading';
import Button from '../../../../ui/components/Buttons/Button/Button';

interface IAddProductToCartButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
}

const AddProductToCartButton = ({
  isLoading = false,
  disabled = false,
}: IAddProductToCartButtonProps): JSX.Element => {
  // Add here all logic for adding to cart (loading, actions in firebase, useProductsSWR etc)

  return (
    <Button
      label='Add to cart'
      size={'normal'}
      disabled={isLoading || disabled}
      variant={'tertiary'}
      icon={isLoading ? <IconLoading /> : <IconCart />}
      onClick={() => {}}
    />
  );
};

export default AddProductToCartButton;
