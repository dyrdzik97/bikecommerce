import { db } from './firebaseConfig';

import 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { IProductDTO } from '../modules/products/dto/productDTO';

interface ICreateOrder {
  id: string;
  userId: string;
  items: IProductDTO[];
  paymentStatus: string;
}

const createOrder = async ({
  id,
  userId,
  items,
  paymentStatus,
}: ICreateOrder): Promise<void> => {
  await addDoc(collection(db, 'orders'), {
    id,
    userId,
    items,
    paymentStatus,
  });
};

export default createOrder;
