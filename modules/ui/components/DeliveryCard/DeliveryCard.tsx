interface IDeliveryCardProps {
  type: string;
  details: string;
  price: number;
  promoPrice?: number;
  onClick: () => void;
  isDeliveryActive: boolean;
  key: string;
}

const DeliveryCard = ({
  key,
  type,
  details,
  price,
  promoPrice,
  onClick,
  isDeliveryActive = false,
}: IDeliveryCardProps) => {
  return (
    <div
      key={key}
      className={`my-2 flex flex-row items-center justify-between rounded-2xl border-2 border border-tertiary-300 p-5 ${
        isDeliveryActive && 'border-primary-100 shadow-xl'
      }`}
      onClick={onClick}
    >
      <div className='align-start flex flex-col items-start text-left'>
        <label className='font-bold'>{type}</label>
        <p className='text-sm text-darkgray'>{details}</p>
      </div>
      <div className='flex flex-row gap-1'>
        {promoPrice && <p>{promoPrice}</p>}
        <p className={`${promoPrice && 'text-darkgray line-through'}`}>
          {price}
        </p>
        {/* TODO add currency */}
        PLN
      </div>
    </div>
  );
};

export default DeliveryCard;
