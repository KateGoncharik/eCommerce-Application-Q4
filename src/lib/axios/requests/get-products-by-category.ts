import { isAxiosError } from 'axios';

import { envVariables } from '@/config/commerce-tools-api';

import { apiInstance } from '../axios-instances';
import { ProductsRequestArguments } from './catalog-types';
import { axiosErrorMsgSchema } from './schemas/axios-error-msg.schema';
import { type Product, getProductsResultSchema } from './schemas/product-schema';

export async function getProductsByCategory(categoryId: string, offset = 0, BEARER_TOKEN: string): Promise<Product[]> {
  const queryArgs: ProductsRequestArguments = { limit: 7, offset };
  const query = `/${envVariables.PROJECT_KEY}/product-projections/search?limit=${queryArgs.limit}&offset=${queryArgs.offset}&filter=categories.id: subtree("${categoryId}")`;
  const encoded = encodeURI(query);
  try {
    const getProductsResult = await apiInstance.get(encoded, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return getProductsResultSchema.parse(getProductsResult.data).results;
  } catch (e) {
    console.error('Error occurred while getting products:', e);
    if (isAxiosError(e)) {
      const message = axiosErrorMsgSchema.catch(e.message).parse(e);
      throw new Error(message);
    }

    throw e;
  }
}
