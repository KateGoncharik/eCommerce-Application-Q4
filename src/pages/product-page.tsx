import { ReactNode, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { Box, Container, Dialog, Paper, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { BackToMain } from '@/components/back-to-main/back-to-main';
import { LoadingBackdrop } from '@/components/backdrop/backdrop';
import { getProductById } from '@/lib/axios/requests/get-product-by-id';
import { useTokenStore } from '@/stores/token-store';

import { boxStyles, descStyles, imgStyles, sliderSettings, titleStyles } from './product-page.constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductPage(): ReactNode {
  const { token } = useTokenStore();
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleImageClick = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };
  const handleModalClose = (): void => setOpen(false);
  if (!id) {
    throw new Error('No product ID');
  }
  const { data, isPending } = useQuery({
    queryFn: () => getProductById(id, token),
    queryKey: ['product', id, token],
  });
  if (isPending) {
    return <LoadingBackdrop open={isPending} />;
  }
  return (
    <Container>
      <Container maxWidth="md">
        <Paper elevation={24} sx={{ marginTop: 4, padding: 5 }}>
          <Typography component="h1" gutterBottom sx={titleStyles} variant="h4">
            {data?.name}
          </Typography>
          <Slider {...sliderSettings}>
            {data?.images.map((image, index) => (
              <Box key={index} onClick={() => handleImageClick(image.url)} sx={boxStyles}>
                <img alt={`${data.name}${index + 1}`} src={image.url} style={imgStyles} />
              </Box>
            ))}
          </Slider>
          <Typography component="p" sx={descStyles} variant="body1">
            {data?.description}
          </Typography>
        </Paper>
        <Dialog maxWidth="lg" onClose={handleModalClose} open={open}>
          <img alt="big" src={selectedImage} style={imgStyles} />
        </Dialog>
      </Container>
      <BackToMain />
    </Container>
  );
}