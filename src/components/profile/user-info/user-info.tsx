import type { FC } from 'react';
import { Control } from 'react-hook-form';

import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

import { ControlledTextField } from '@/components/controlled-text-field';
import { AccountDetails } from '@/features/account-details-form/account-details.schema';

export const UserInfo: FC<{ control: Control<AccountDetails>; isEditMode: boolean }> = ({ control, isEditMode }) => {
  return (
    <Box>
      <Typography align="center" sx={{ fontSize: { lg: 30, md: 26, sm: 22, xs: 20 } }} variant="h2">
        Account details
      </Typography>
      <List>
        <ListItem className="items-start">
          <ListItemText className="whitespace-nowrap p-1" primary="First name:" />
          <ControlledTextField {...{ control, disabled: !isEditMode, name: 'firstName' }} />
        </ListItem>
        <ListItem className="items-start">
          <ListItemText className="whitespace-nowrap p-1" primary="Last name:" />
          <ControlledTextField {...{ control, disabled: !isEditMode, name: 'lastName' }} />
        </ListItem>
        <ListItem className="items-start">
          <ListItemText className="whitespace-nowrap p-1" primary="Email:" />
          <ControlledTextField {...{ control, disabled: !isEditMode, name: 'email' }} />
        </ListItem>
        <ListItem className="items-start">
          <ListItemText className="p-1" primary="Date of birth:" />
          <ControlledTextField {...{ control, disabled: !isEditMode, name: 'dateOfBirth', type: 'date' }} />
        </ListItem>
      </List>
    </Box>
  );
};
