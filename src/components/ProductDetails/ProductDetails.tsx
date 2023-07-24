import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Grid, Typography, Button, Divider } from '@mui/material';
import { Motorcycle } from '@/interfaces';
import { ProductForm } from '../';

interface ProductDetailsProps {
  type: string;
  productId: string;
}

interface DetailsProps {
  product: Motorcycle;
  setShowForm: (value: boolean) => void;
}

const Details: React.FC<DetailsProps> = ({ product, setShowForm }) => {
  return (
    <>
      <Typography variant='h2' sx={{ fontSize: '34px', pb: '10px' }}>
        {product.name}
      </Typography>
      <Typography variant='body1' sx={{ pb: '20px', fontWeight: '500' }}>
        {product.priceFormatted}
      </Typography>
      <Divider light />
      <Typography
        variant='body1'
        sx={{ pt: '20px', pb: '8px', fontWeight: '500' }}
      >
        Description
      </Typography>
      <Typography variant='body1'>{product.description ?? 'N/A'}</Typography>
      <StyledButton
        variant='contained'
        sx={{ mt: '40px' }}
        onClick={() => setShowForm(true)}
      >
        Purchase
      </StyledButton>
    </>
  );
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  type,
  productId,
}) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Motorcycle>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/${type}/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ItemContainer>
            <Image
              src={`${currentPath}.jpg`}
              alt='Product'
              width={500}
              height={350}
            />
          </ItemContainer>
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailsContainer>
            {showForm ? (
              <ProductForm type={type} product={data} />
            ) : (
              <Details product={data} setShowForm={setShowForm} />
            )}
          </DetailsContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 50px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemContainer = styled.div`
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  padding: 0 80px;
  min-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  width: 100px;
  color: '#903df7';
  background-color: '#903df7';

  &:hover {
    background-color: '#903df7';
  }
`;
