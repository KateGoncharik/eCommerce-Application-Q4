import { isAxiosError } from 'axios';

import { envVariables } from '@/config/commerce-tools-api';
import { apiInstance } from '@/lib/axios/axios-instances';

import { axiosErrorMsgSchema } from '../schemas/axios-error-msg.schema';
import { type Category, categoriesResponseSchema } from '../schemas/get-categories-schema';

export const getParentCategories = async (BEARER_TOKEN: string): Promise<Category[]> => {
  const query = `/${envVariables.PROJECT_KEY}/categories?where=parent is not defined`;
  try {
    const getCategoriesResult = await apiInstance.get(query, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
    return categoriesResponseSchema.parse(getCategoriesResult.data).results;
  } catch (e) {
    console.error('Error occurred while getting parent categories:', e);
    if (isAxiosError(e)) {
      const message = axiosErrorMsgSchema.catch(e.message).parse(e);
      throw new Error(message);
    }

    throw e;
  }
};
