import Link from 'next/link';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { ProductCard } from '..';

interface ListProductsProps {
  products: any
}

export const ListProducts: React.FC<ListProductsProps> = ({ products }) => {
  return (
    <Container>
      <Grid container>
        {products.map((product: any) => (
          <Grid item xs={12} sm={6} md={3} key={product.baseProductCode}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
`;
