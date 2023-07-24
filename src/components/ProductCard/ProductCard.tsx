import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

interface ProductCardProps {
  type: string;
  product: any;
}

export const ProductCard: React.FC<ProductCardProps> = ({ type, product }) => {
  return (
    <Container>
      <Link
        href={`/${type}/${product.baseProductCode}`}
        style={{ textDecoration: 'none', color: '#0F110C' }}
      >
        <Image
          src={`/${type}/${product.baseProductCode}.jpg`}
          alt='Product'
          width={260}
          height={160}
        />
        <Typography
          variant='body1'
          sx={{ fontSize: '14px', fontWeight: '500' }}
        >
          {product.name}
        </Typography>
        <Typography variant='body1' sx={{ fontSize: '14px' }}>
          {product.priceFormatted}
        </Typography>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 40px;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 14px;
  border: 1px solid #e5e5e5;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
