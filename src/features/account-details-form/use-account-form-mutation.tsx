import { toast } from 'react-toastify';

import { UseMutationResult, useMutation } from '@tanstack/react-query';

import { Customer } from '@/lib/axios/requests/schemas/customer.schema.ts';
import { updateCustomer } from '@/lib/axios/requests/update-customer/update-request.ts';
import { useCustomerStore } from '@/stores/customer-store.ts';
import { useTokenStore } from '@/stores/token-store.ts';

import { AccountDetails } from './account-details.schema.ts';
import { getRequestBody } from './get-request-body.tsx';

export function useAccountFormMutation(): [UseMutationResult<Customer, Error, AccountDetails>] {
  const token = useTokenStore().token;
  const customerStore = useCustomerStore();
  const updateUser = (data: AccountDetails): Promise<Customer> => {
    if (!customerStore.customer) {
      throw new Error('no customer in store');
    }
    const requestBody = getRequestBody(customerStore.customer, data);
    if (!token) {
      throw new Error('no token in store');
    }
    const response = updateCustomer(...requestBody, token);
    return response;
  };
  const accountMutation = useMutation({
    mutationFn: updateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (response) => {
      customerStore.setCustomer({ customer: response });
      toast.success('The data was successfully updated!');
    },
  });
  return [accountMutation] as const;
}
