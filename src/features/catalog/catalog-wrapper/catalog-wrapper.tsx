import { FC, ReactNode } from 'react';

import { Stack, Typography } from '@mui/material';

import { BasicBreadcrumbs } from './breadcrumbs';

export const CatalogWrapper: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <Stack className="flex flex-wrap p-5  ">
      <BasicBreadcrumbs />
      <Typography className="mx-5 my-auto" variant="h3">
        Catalog products
      </Typography>
      {children}
    </Stack>
  );
};
