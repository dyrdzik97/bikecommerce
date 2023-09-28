import GenericButton from '../../../../ui/components/Buttons/GenericButton/GenericButton';
import Separator from '../../../../ui/components/Separator/Separator';

interface ICartPreviewSummaryPanelProps {
  total: number;
}

const CartPreviewSummaryPanel = ({
  total,
}: ICartPreviewSummaryPanelProps): JSX.Element => {
  return (
    <div className='fixed bottom-0 right-0 box-border flex w-full flex-col p-5'>
      <div className='flex flex-row justify-between text-darkgray'>
        <p>Shipping</p>
        <p>Calculated in checkout</p>
      </div>
      <Separator />
      <div className='flex flex-row justify-between'>
        <p>Summary</p>
        <p>{total} PLN</p>
        {/* TODO add currency */}
      </div>
      <Separator />
      <GenericButton
        label='Go to checkout'
        size={'large'}
        className='bg-[#002C74] text-white'
      />
      <Separator />
    </div>
  );
};

export default CartPreviewSummaryPanel;
