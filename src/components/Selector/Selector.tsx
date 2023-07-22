import { useState } from 'react';
import styled from '@emotion/styled';
import { ButtonGroup, Button } from '@mui/material';

export const Selector: React.FC = () => {
  const [sectionSelected, setSectionSelected] = useState('motorcycles');

  const options = [
    { key: 'motorcycles', label: 'Motorcycles' },
    { key: 'accesories', label: 'Accesories'},
  ];

  return (
    <Container>
      <ButtonGroup color='secondary' variant="text">
        {options.map((option) => (
          <Button
            size="large"
            key={option.key}
            sx={{ fontWeight: 'bold', color: option.key === sectionSelected ? '#903df7' : '#0F110C'}}
            onClick={() => setSectionSelected(option.key)}>
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
