import { IProductDTO } from '../../products/dto/productDTO';

export interface ICategoryTileProps {
  imageSrc: string;
  title: string;
  url: string;
  subtitle: string;
  buttonText: string;
}

export interface IIconOrientationProps {
  orientation?: 'left' | 'right' | 'down' | 'up';
}

export interface IIconProps {
  strokeColor?: string;
  backgroundFillColor?: string;
  fillColor?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

export interface IOrderProps {
  id: string;
  userId: string;
  items: IProductDTO[];
  paymentStatus: string;
}
