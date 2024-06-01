import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Box, FormControlLabel, Switch } from '@mui/material';

import { UserInfo } from '@/components/profile/user-info';
import { Customer } from '@/lib/axios/requests/schemas/customer.schema';

import { AddressDisplay } from '../address-display/address-display';
import { AccountDetails } from './account-details.schema';

export const ProfileInfoContent: FC<{
  control: Control<AccountDetails>;
  customer: Customer;
  isEditMode: boolean;
}> = ({ control, customer, isEditMode }) => {
  return (
    <>
      <Box
        className="flex items-center justify-evenly p-2"
        sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}
      >
        <UserInfo {...{ control, isEditMode }} />
        <AddressDisplay {...{ control, customer: customer }} />
      </Box>
      <Controller
        control={control}
        name="isEditMode"
        render={({ field }) => (
          <FormControlLabel
            checked={field.value}
            className="m-0 flex justify-center"
            control={<Switch color="primary" />}
            label="Edit mode"
            labelPlacement="start"
            {...field}
          />
        )}
      />
    </>
  );
};
