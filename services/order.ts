import { db } from './firebaseConfig';

import 'firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { IOrderProps } from '../modules/ui/models';

const createOrder = async ({
  id,
  userId,
  items,
  paymentStatus,
}: IOrderProps): Promise<void> => {
  await addDoc(collection(db, 'orders'), {
    id,
    userId,
    items,
    paymentStatus,
  });
};

export default createOrder;
