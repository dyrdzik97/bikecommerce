import Link from 'next/link';
import { mapColorsVariantToHex } from '../../../mappers';

// TODO think about saving variant - with HEX color as default or only by text ex. green/red etc and then map it like now

interface IColorVariantsProps {
  items: string[];
}

// #0000ff -> bg-white-100
// w konfigu tailwinda dodac odpowiadające wartości hex

const ColorVariants = ({ items }: IColorVariantsProps) => {
  const colors = mapColorsVariantToHex(items);

  return (
    <div className={`mt-2 flex items-center gap-1`}>
      {colors?.map((item) => {
        return (
          // think how to handle variants links
          <Link href='/' legacyBehavior>
            <a>
              <div
                className={`h-[1rem] w-4 rounded-full bg-[${item?.color.toLowerCase()}] hover:border`}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default ColorVariants;
