import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const Loader: React.FC = () => {
  return (
    <Container>
      <CircularProgress sx={{ color: '#903df7', fontSize: 90 }} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #903df7;
`;
