import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const Loader: React.FC = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

const Container = styled.div`
  font-size: 90px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #903df7;
`;
