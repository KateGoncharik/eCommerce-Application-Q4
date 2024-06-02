import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Stack } from '@mui/material';

import type { Product } from '@/lib/axios/requests/schemas/product-schema';

import { CatalogItem } from '@/features/catalog/catalog-item/';
import { CatalogWrapper } from '@/features/catalog/catalog-wrapper';
import { CategoriesNavigation } from '@/features/catalog/categories-navigation';
import { getFilteredProducts } from '@/lib/axios/requests/get-filtered-products';
import { getAllProducts } from '@/lib/axios/requests/get-products';
import { getProductsByCategory } from '@/lib/axios/requests/get-products-by-category';
import { useTokenStore } from '@/stores/token-store';

const CatalogPage: FC = () => {
  const { token } = useTokenStore();
  const [products, setProducts] = useState<Product[] | null>(null);
  if (!token) {
    throw new Error('Token expected');
  }
  const location = useLocation();
  getFilteredProducts(0, token).then(
    (res) => console.log(res),
    (err) => console.log(err),
  );
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const categoryId = urlSearchParams.get('category');

    if (categoryId) {
      getProductsByCategory(categoryId, 0, token).then(
        (products: Product[]) => {
          setProducts(products);
        },
        (error) => {
          console.error(error);
        },
      );
    } else {
      getAllProducts(0, token).then(
        (products: Product[]) => {
          setProducts(products);
        },
        (error) => {
          console.error(error);
        },
      );
    }
  }, [token, location]);

  return (
    <CatalogWrapper>
      <Stack className={'flex-row justify-between'}>
        <CategoriesNavigation />
        {products && products.length > 0 ? (
          <Stack className="my-auto  flex w-3/4 flex-row flex-wrap gap-2">
            {products.map((product: Product) => {
              return <CatalogItem key={`${product.key}`} product={product} />;
            })}
          </Stack>
        ) : (
          <Stack className="mx-0 my-auto w-full">No data available. Try to reload the page</Stack>
        )}
      </Stack>
    </CatalogWrapper>
  );
};

export default CatalogPage;
