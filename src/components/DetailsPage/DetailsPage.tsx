import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Motorcycle, Accessory } from '@/interfaces';
import { ProductDetails, ProductForm } from '../';

interface DetailsPageProps {
  type: string;
  productId: string;
}

export const DetailsPage: React.FC<DetailsPageProps> = ({
  type,
  productId,
}) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [data, setData] = useState<Motorcycle | Accessory>();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/api/${type}/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [type, productId]);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ItemContainer>
            <Image
              src={`${currentPath}.jpg`}
              alt='Product'
              width={0}
              height={0}
              layout='responsive'
            />
          </ItemContainer>
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailsContainer>
            {showForm ? (
              <ProductForm type={type} product={data} />
            ) : (
              <ProductDetails product={data} setShowForm={setShowForm} />
            )}
          </DetailsContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) {
    padding: 0 50px;
  }
`;

const ItemContainer = styled.div`
  width: 300px;
  height: 271px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 668px) {
    width: 500px;
    height: 350px;
  }
`;

const DetailsContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 668px) {
    padding: 0 80px;
    min-height: 600px;
  }
`;
