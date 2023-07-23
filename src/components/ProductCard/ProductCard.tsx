import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';

interface ProductCardProps {
  product: any
}

export const ProductCard: React.FC<ProductCardProps> = ({  product }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Link href={`/${currentPath}/${product.baseProductCode}`} style={{ textDecoration: 'none', color: '#0F110C' }}>
      <Container>
        <Image src={`${currentPath}/${product.baseProductCode}.jpg`} alt='Product' width={260} height={167}/>
        <Typography variant='body1' sx={{ fontWeight: '500' }}>{product.name}</Typography>
        <Typography variant='body1'>{product.priceFormatted}</Typography>
      </Container>
    </Link>
  );
}; 

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 40px;
  transition: box-shadow 0.3s ease-in-out;
  width: 92%;
  height: 240px;
  border-radius: 14px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
