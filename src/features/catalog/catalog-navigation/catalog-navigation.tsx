import { FC, ReactNode, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { ButtonGroup } from '@mui/material';

import { getChildCategories } from '@/lib/axios/requests/get-child-categories';
import { getParentCategories } from '@/lib/axios/requests/get-parent-categories';
import { Category } from '@/lib/axios/requests/schemas/get-categories-schema';
import { useTokenStore } from '@/stores/token-store';

import { CategoryItem } from './category-item';

export type CategoryData = {
  children: Category[];
  id: string;
  name: string;
};

export const CategoriesNavigation: FC<{
  children?: ReactNode;
}> = () => {
  // const { category } = useParams<{ category: string }>();
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const { token } = useTokenStore();

  useEffect(() => {
    if (!token) {
      throw new Error('Token expected');
    }
    getParentCategories(token).then(
      (parentCategoriesResponse) => {
        const childCategoryPromises = parentCategoriesResponse.map((category) =>
          getChildCategories(category.id, token),
        );

        Promise.all(childCategoryPromises).then(
          (childCategoriesResponse) => {
            const allCategoriesData = parentCategoriesResponse.map((childCategory, childCategoryIndex) => ({
              children: childCategoriesResponse[childCategoryIndex],
              id: childCategory.id,
              name: childCategory.name['en-US'],
            }));
            setCategories(allCategoriesData);
          },
          (err) => console.error(err),
        );
      },

      (err) => {
        console.error(err);
      },
    );
  }, [token]);

  return categories.length > 0 ? (
    <ButtonGroup aria-label="Vertical button group" orientation="vertical" variant="contained">
      {categories.map((fetchedCategory) => {
        return <CategoryItem category={fetchedCategory} key={fetchedCategory.id} />;
      })}
    </ButtonGroup>
  ) : (
    <>no categories available</>
  );
};
