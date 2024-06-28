import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Icon, Stack, Typography } from '@mui/material';

import favicon from '@/assets/img/favicon.png';
import { PromoCodesWrapper } from '@/features/main-content/promo-codes-wrapper';

const mainButtonStyles = {
  transition: '2s',
  width: { lg: '30%', md: '40%', sm: '55%', xs: '75%' },
};

const mainLogoStyles = { lg: '40%', md: '50%', sm: '70%', xs: '90%' };

const MainPage: FC = () => {
  return (
    <Stack className="flex-col items-center justify-center p-3">
      <Stack
        className="flex items-center justify-center gap-1 "
        sx={{ flexDirection: { lg: 'row-reverse', md: 'column', sm: 'column', xs: 'column' } }}
      >
        <Stack className="items-center gap-2">
          <Typography
            sx={{
              fontSize: { lg: '2.5em', md: '2em', sm: '1.7em', xs: '1.5em' },
              textAlign: 'center',
              transition: '2s',
            }}
          >
            Welcome to Verdantis flowers shop
          </Typography>
          <Button component={RouterLink} sx={mainButtonStyles} to="/catalog" variant="contained">
            go shopping
          </Button>
        </Stack>

        <Icon
          alt="main-logo"
          component="img"
          src={favicon}
          sx={{
            height: mainLogoStyles,
            width: mainLogoStyles,
          }}
        />
      </Stack>
      <PromoCodesWrapper />
      <Stack
        className="flex-col items-center justify-center gap-1 px-4 py-6"
        sx={{ backgroundColor: 'secondary.main', width: '100%' }}
      >
        <Typography className="text-center" sx={{ fontSize: '1.5em' }}>
          Would like to join us?
        </Typography>
        <Button component={RouterLink} sx={mainButtonStyles} to="/login" variant="outlined">
          login
        </Button>
        <Button component={RouterLink} sx={mainButtonStyles} to="/registration" variant="outlined">
          registration
        </Button>
      </Stack>
    </Stack>
  );
};

export default MainPage;
