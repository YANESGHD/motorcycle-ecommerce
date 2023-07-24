import styled from '@emotion/styled';
import { DoDisturbOn } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const NotFoundMessage: React.FC = () => (
  <Container>
    <DoDisturbOn sx={{ fontSize: { xs: 60, md: 70 }, marginBottom: '30px' }} />
    <Typography
      variant='h3'
      sx={{
        fontSize: '20px',
        fontWeight: '500',
        textAlign: 'center',
      }}
    >
      NO PRODUCTS FOUND
    </Typography>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
