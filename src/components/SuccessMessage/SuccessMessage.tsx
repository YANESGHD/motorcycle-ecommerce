import Link from 'next/link';
import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { CheckCircle } from '@mui/icons-material';

interface SuccessMessageProps {
  type: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ type }) => {
  return (
    <Container>
      <CheckCircle sx={{ fontSize: { xs: 60, md: 85 }, marginBottom: '40px', color: '#408500' }} />
      <Typography variant='h2' sx={{ fontSize: '34px', pb: '14px' }}>
        Thank you for your inquiry
      </Typography>
      <Typography variant='body1' sx={{ fontSize: '16px', pb: '14px' }}>
        An advisor will be contacting you shortly
      </Typography>
      <Link
        href={`/${type}`}
        style={{
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        <Button variant='contained' sx={{ mt: '30px' }}>Go to Home</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
