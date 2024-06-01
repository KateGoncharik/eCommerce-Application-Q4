import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
  event.preventDefault();
}

export const BasicBreadcrumbs: FC = () => {
  const path = window.location.pathname;
  const pathArray = path.split('/');
  const crumbs = pathArray.map((path, index) => {
    const last = index === path.length - 1;
    const to = `${pathArray.slice(0, index + 1).join('/')}`;
    return last ? (
      <Typography color="inherit" component={'h3'}>
        {path}
      </Typography>
    ) : (
      <div key={path} onClick={handleClick} role="presentation">
        <Link color="inherit" component={RouterLink} to={to} underline="hover">
          {path}
        </Link>
      </div>
    );
  });

  return <Breadcrumbs aria-label="breadcrumb">{...crumbs}</Breadcrumbs>;
};
