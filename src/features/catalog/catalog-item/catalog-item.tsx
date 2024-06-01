import { Link as RouterLink } from 'react-router-dom';

import { Button, Card, CardActions, Typography } from '@mui/material';

import { Product } from '@/lib/axios/requests/schemas/product-schema';

export const CatalogItem = ({ product }: { product: Product }): JSX.Element => {
  const { description, name } = product;
  const enName = name['en-US'];
  const enDescription = description ? description['en-US'] : 'No description available';
  return (
    <Card
      className="mt-5 flex max-w-40 flex-col justify-center p-5"
      component={RouterLink}
      sx={{ backgroundColor: 'primary.contrastText', textDecoration: 'none' }}
      to={`product/${product.id}`}
      variant="outlined"
    >
      <Typography className="my-3  text-center" sx={{ fontWeight: 600 }}>
        {enName}
      </Typography>
      <Typography className="my-3" sx={{ color: 'primary.dark', fontWeight: 600 }}>
        Description: {enDescription}
      </Typography>
      <CardActions>
        <Button className="text-center" component={RouterLink} size="small" to={product.id}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
