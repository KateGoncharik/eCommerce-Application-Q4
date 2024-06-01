import { FC, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation, useSearchParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { getCategoryByKey } from '@/lib/axios/requests/get-category-by-key';
import { useTokenStore } from '@/stores/token-store';

import { formatCategoryKey } from './helper';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
  event.preventDefault();
}

export const BasicBreadcrumbs: FC = () => {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const setSearchParamsRef = useRef(setSearchParams);
  const { token } = useTokenStore();
  if (!token) {
    throw new Error('Token expected');
  }

  const pathArray = location.pathname.split('/');
  const lastPath = pathArray[pathArray.length - 1];
  useEffect(() => {
    const setSearchParams = setSearchParamsRef.current;
    if (lastPath === 'catalog') {
      setSearchParams({ category: '' });
      return;
    }
    const decodedPath = decodeURIComponent(lastPath);
    const correctKey = formatCategoryKey(decodedPath);
    getCategoryByKey(correctKey, token).then(
      (res) => {
        const { id } = res[0];
        setSearchParams({ category: id });
      },

      (err) => console.error(err),
    );
  }, [lastPath, token]);
  const crumbs = pathArray.map((path, index) => {
    const last = index === path.length - 1;
    const pathSegment = pathArray.slice(1, index + 1).join('/');
    const to = `/${pathSegment}${location.search}`;

    return last ? (
      <Typography color="inherit" component={'h3'} key={path}>
        {path}
      </Typography>
    ) : (
      <div key={path} onClick={handleClick} role="presentation">
        <Link color="inherit" component={RouterLink} key={path} to={to} underline="hover">
          {path}
        </Link>
      </div>
    );
  });

  return <Breadcrumbs aria-label="breadcrumb">{...crumbs}</Breadcrumbs>;
};
