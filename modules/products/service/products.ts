import { DocumentData, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { IProductDTO } from '../dto/productDTO';
import { getProductTiles, isProductBelongsToGivenCategory } from '../mappers';

export const getProductsFromDatabase = async (
  category?: string | string[] | undefined
) => {
  const data: IProductDTO[] | DocumentData[] = await getDocs(
    collection(db, 'products')
  ).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => doc.data());
  });

  const results = isProductBelongsToGivenCategory(category)
    ? getProductTiles(data as IProductDTO[]).filter((item) =>
        item.categories.includes(category as string)
      )
    : getProductTiles(data as IProductDTO[]);

  return {
    items: results,
  };
};
