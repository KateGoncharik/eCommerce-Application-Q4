import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Link, Typography } from '@mui/material';

import { UserInfo } from '@/components/profile/user-info/user-info';
import { AddressDisplay } from '@/features/address-display/address-display';
import { useCustomerStore } from '@/stores/customer-store';

export const UserProfilePage: FC = () => {
  const store = useCustomerStore();
  const customer = store.customer;
  if (!customer) {
    throw Error('no customer data');
  }
  return (
    <div id="error-page">
      <Typography component={'h1'} sx={{ fontSize: { lg: 50, md: 42, sm: 38 } }} textAlign={'center'}>
        User Profile
      </Typography>
      <Box
        className="flex items-center justify-evenly p-2"
        sx={{ flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' } }}
      >
        <UserInfo {...customer} />
        <AddressDisplay {...customer} />
      </Box>
      <Link className="mx-auto block p-2 text-center" component={RouterLink} to="/">
        <Button>Back to main</Button>
      </Link>
    </div>
  );
};
