import type { FC } from 'react';

import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { Customer } from '@/lib/axios/requests/schemas/customer.schema';

export const UserInfo: FC<Customer> = ({ dateOfBirth, firstName, lastName }) => {
  if (!dateOfBirth) {
    throw Error('no data was set');
  }
  const dateString = new Date(dateOfBirth).toLocaleDateString();
  return (
    <Box>
      <Typography align="center" sx={{ fontSize: { lg: 30, md: 26, sm: 22, xs: 20 } }} variant="h2">
        Account details
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`First name: ${firstName}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Last name: ${lastName}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Date of Birth: ${dateString}`} />
        </ListItem>
      </List>
    </Box>
  );
};
