import type { FC } from 'react';
import { Control } from 'react-hook-form';

import { Box } from '@mui/material';

import { Customer } from '@/lib/axios/requests/schemas/customer.schema';

import { AccountDetails } from '../account-details-form/account-details.schema';
import { AddressesContainer } from './addresses-container';
import { getDefaultAddresses } from './get-default-addresses';

export const AddressDisplay: FC<{ control: Control<AccountDetails>; customer: Customer }> = ({
  /* control, */
  customer,
}) => {
  const formattedAddresses = getDefaultAddresses(customer);
  console.log(formattedAddresses);
  return (
    <Box className="flex flex-col p-2">
      <AddressesContainer
        {...{
          addressesToDisplay: formattedAddresses.billing,
          hasDefault: formattedAddresses.hasDefaultBilling,
          type: 'Billing',
        }}
      />
      <AddressesContainer
        {...{
          addressesToDisplay: formattedAddresses.shipping,
          hasDefault: formattedAddresses.hasDefaultShipping,
          type: 'Shipping',
        }}
      />
    </Box>
  );
};
