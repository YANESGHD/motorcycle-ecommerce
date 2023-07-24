import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { ProductCard } from '..';

interface ListProductsProps {
  type: string;
  products: any;
}

export const ListProducts: React.FC<ListProductsProps> = ({
  type,
  products,
}) => {
  return (
    <Container>
      <Grid container>
        {products.map((product: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={product.baseProductCode}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ProductCard type={type} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
