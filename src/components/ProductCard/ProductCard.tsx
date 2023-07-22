import Image from 'next/image';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

interface ProductCardProps {
  product: any
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Container>
      <Image src={`/motorcycle_photos/${product.baseProductCode}.jpg`} alt='Product' width={260} height={240}/>
      <Typography variant='body1'>{product.name}</Typography>
      <Typography variant='body1'>{product.priceFormatted}</Typography>
    </Container>
  );
}; 

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  transition: box-shadow 0.3s ease-in-out;
  width: 92%;
  height: 240px;
  border-radius: 14px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
