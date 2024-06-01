import { Customer } from '@/lib/axios/requests/schemas/customer.schema.ts';
import { Action } from '@/lib/axios/requests/update-customer/update-actions.types.ts';

import { AccountDetails } from './account-details.schema.ts';

export const getRequestBody = (prevCustomerInfo: Customer, formData: AccountDetails): [number, Action[]] => {
  const actions: Action[] = [];
  const version = prevCustomerInfo.version;
  if (formData.dateOfBirth !== prevCustomerInfo.dateOfBirth) {
    actions.push({ action: 'setDateOfBirth', dateOfBirth: formData.dateOfBirth });
  }
  if (formData.firstName !== prevCustomerInfo.firstName) {
    actions.push({ action: 'setFirstName', firstName: formData.firstName });
  }
  if (formData.lastName !== prevCustomerInfo.lastName) {
    actions.push({ action: 'setLastName', lastName: formData.lastName });
  }
  if (formData.email !== prevCustomerInfo.email) {
    actions.push({ action: 'changeEmail', email: formData.email });
  }
  if (actions.length === 0) {
    throw new Error('no data to update');
  }
  return [version, actions];
};
