import { Link as RouterLink } from 'react-router-dom';

import { Card, CardActions, Typography } from '@mui/material';

import { PricesBlock } from '@/components/prices-block/prices-block';
import { Product } from '@/lib/axios/requests/schemas/product-schema';

import { discountPriceStyleCatalog, firstVariantPrice, stylePriceCatalog } from './catalog-item.constants';

export const CatalogItem = ({ product }: { product: Product }): JSX.Element => {
  const { description, masterVariant, name } = product;
  const enName = name['en-US'];
  const enDescription = description ? description['en-US'] : 'No description available';
  const image = masterVariant ? masterVariant.images[0] : { name: 'placeholder', url: '' };
  const { prices } = masterVariant;
  return (
    <Card
      className="flex flex-col justify-between p-5"
      component={RouterLink}
      sx={{
        ':hover': { bgcolor: 'primary.light', transition: '2s' },
        backgroundColor: 'primary.contrastText',
        textDecoration: 'none',
        transition: '2s',
        width: { lg: '25%', md: '33%', sm: '70%', xs: '100%' },
      }}
      to={`product/${product.id}`}
      variant="outlined"
    >
      <img alt={enName} className={'align-self-start w-full '} src={image.url} />

      <Typography
        className="my-3  text-center"
        sx={{ fontSize: { lg: '20px', md: '18px', xs: '16px' }, fontWeight: 600 }}
      >
        {enName}
      </Typography>
      <Typography
        className="my-3"
        sx={{ color: 'primary.dark', fontSize: { lg: '18px', md: '16px', xs: '12px' }, fontWeight: 600 }}
      >
        {enDescription}
      </Typography>
      <PricesBlock
        price={prices[firstVariantPrice]}
        styleDiscount={discountPriceStyleCatalog}
        stylePrice={stylePriceCatalog}
      />
      <CardActions>
        <Typography className="text-center" component={'h3'}>
          Click to learn more
        </Typography>
      </CardActions>
    </Card>
  );
};
