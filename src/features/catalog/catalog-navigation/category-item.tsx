import { useSearchParams } from 'react-router-dom';

import { List, ListItemButton } from '@mui/material';

import type { CategoryData } from './catalog-navigation';

export const CategoryItem = ({ category }: { category: CategoryData }): JSX.Element => {
  const { children, id, name } = category;

  const [, setSearchParams] = useSearchParams();
  const handleClick: React.MouseEventHandler<HTMLElement> = (e): void => {
    const eventTarget = e.target;
    if (!eventTarget || !(eventTarget instanceof HTMLElement)) {
      throw new Error('Target with id expected');
    }
    const targetId = eventTarget.id;

    setSearchParams({ category: targetId });
  };
  const handleParentClick: React.MouseEventHandler<HTMLElement> = (): void => {
    setSearchParams({ category: id });
  };
  return (
    <List
      aria-labelledby="nested-list-subheader"
      component="nav"
      subheader={
        <ListItemButton
          id={id}
          onClick={(e) => handleParentClick(e)}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        >
          {name}
        </ListItemButton>
      }
      sx={{ bgcolor: 'primary.main', width: '100%' }}
    >
      {children.map((childCategory) => {
        const { id, key, name } = childCategory;
        const enName = name['en-US'];
        return (
          <ListItemButton
            id={id}
            key={key}
            onClick={(e) => handleClick(e)}
            sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}
          >
            {enName}
          </ListItemButton>
        );
      })}
    </List>
  );
};
