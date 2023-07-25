import styled from '@emotion/styled';
import { Typography, Button, Divider } from '@mui/material';
import { Motorcycle, Accessory } from '@/interfaces';

interface DetailsProps {
  product: Motorcycle | Accessory;
  setShowForm: (value: boolean) => void;
}

export const ProductDetails: React.FC<DetailsProps> = ({
  product,
  setShowForm,
}) => {
  return (
    <>
      <Typography
        variant='h2'
        sx={{ fontSize: { xs: '24px', md: '34px' }, pb: '10px' }}
      >
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
        sx={{ mt: { xs: '20px', md: '40px' } }}
        onClick={() => setShowForm(true)}
      >
        Purchase
      </StyledButton>
    </>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: '#903df7';
  background-color: '#903df7';

  &:hover {
    background-color: '#903df7';
  }

  @media (min-width: 668px) {
    width: 100px;
  }
`;
