import { Link as RouterLink } from 'react-router-dom';

import { Card, CardActions, Typography } from '@mui/material';

import { Product } from '@/lib/axios/requests/schemas/product-schema';

export const CatalogItem = ({ product }: { product: Product }): JSX.Element => {
  const { description, masterVariant, name } = product;
  const enName = name['en-US'];
  const enDescription = description ? description['en-US'] : 'No description available';
  const image = masterVariant ? masterVariant.images[0] : { name: 'placeholder', url: '' };
  return (
    <Card
      className="mt-5 flex max-w-40 flex-col justify-center p-5"
      component={RouterLink}
      sx={{
        ':hover': { bgcolor: 'primary.light', transition: '2s' },
        backgroundColor: 'primary.contrastText',
        textDecoration: 'none',
        transition: '2s',
      }}
      to={`product/${product.id}`}
      variant="outlined"
    >
      <img alt={enName} className={' b-2 w-full '} src={image.url} />

      <Typography className="my-3  text-center" sx={{ fontWeight: 600 }}>
        {enName}
      </Typography>
      <Typography className="my-3" sx={{ color: 'primary.dark', fontWeight: 600 }}>
        Description: {enDescription}
      </Typography>
      <CardActions>
        <Typography className="text-center" component={'h3'}>
          Click to learn more
        </Typography>
      </CardActions>
    </Card>
  );
};
