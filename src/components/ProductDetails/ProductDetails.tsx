import { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Grid, Typography, Button, Divider } from '@mui/material';
import { Motorcycle } from '@/interfaces';
import { ProductForm } from '../';

interface ProductDetailsProps {
  productPath: string
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ productPath }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Motorcycle>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(`/api/${productPath}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ItemContainer>
            <Image src={`/motorcycle_photos/${data.baseProductCode}.jpg`} alt='Product' width={510} height={400}/>
          </ItemContainer>
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailsContainer>
            {showForm ? (
              <ProductForm product={data} />
            ) : (
              <>
                <Typography variant='h2' sx={{ fontSize: '36px', pb: '10px' }}>{data.name}</Typography>
                <Typography variant='body1' sx={{ pb: '20px', fontWeight: '500' }} >{data.priceFormatted}</Typography>
                <Divider light />
                <Typography variant='body1' sx={{ pt: '20px', pb: '8px', fontWeight: '500' }}>Description</Typography>
                <Typography variant='body1'>{data.description}</Typography>
                <StyledButton variant="contained" sx={{ mt: '40px' }} onClick={() => setShowForm(true)}>Purchase</StyledButton>
              </>
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
