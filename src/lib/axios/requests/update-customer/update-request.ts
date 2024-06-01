import { isAxiosError } from 'axios';

import { envVariables } from '@/config/commerce-tools-api';

import { apiInstance } from '../../axios-instances';
import { axiosErrorMsgSchema } from '../schemas/axios-error-msg.schema';
import { Customer, customerSchema } from '../schemas/customer.schema';
import { Action } from './update-actions.types';

export async function updateCustomer(version: number, actions: Action[], BEARER_TOKEN: string): Promise<Customer> {
  try {
    const customerUpdateResult = await apiInstance.post(
      `/${envVariables.PROJECT_KEY}/me`,
      {
        actions,
        version,
      },
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      },
    );

    return customerSchema.parse(customerUpdateResult.data);
  } catch (e) {
    if (isAxiosError(e)) {
      const message = axiosErrorMsgSchema.catch(e.message).parse(e);
      throw new Error(message);
    }

    throw e;
  }
}
