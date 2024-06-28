import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Icon, Link, useScrollTrigger } from '@mui/material';
import { Stack } from '@mui/system';

import logo from '@/assets/img/Verdantis-small.png';

import { Navigation } from './navigation';

export const Header: FC<{
  children?: ReactNode;
}> = () => {
  return (
    <AppBar
      className="px-5 py-1"
      data-testid="header"
      sx={{
        backgroundColor: useScrollTrigger() ? 'primary.dark' : 'primary.main',
        minHeight: '5vh',
        position: 'sticky',
        top: 0,
      }}
    >
      <Stack alignItems="center" className="w-full flex-row justify-between">
        <Stack
          alignItems="center"
          borderRadius={20}
          justifyContent="center"
          sx={{ transition: '2s' }}
          width={{ lg: '20%', md: '30%', sm: '40%', xs: '50%' }}
        >
          <Link component={RouterLink} to="/">
            <Icon alt="logo" className="h-full w-full" component="img" src={logo} />
          </Link>
        </Stack>
        <Navigation />
      </Stack>
    </AppBar>
  );
};
