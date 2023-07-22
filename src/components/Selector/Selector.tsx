import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { ButtonGroup, Button } from '@mui/material';
import { RootState, modifySection } from '@/store';

export const Selector: React.FC = () => {
  const { sections, selectedSection }= useSelector((state: RootState) => state.section);
  const dispatch = useDispatch();

  return (
    <Container>
      <ButtonGroup color='secondary' variant='text'>
        {sections.map((section) => (
          <Button
            size='large'
            key={section.key}
            sx={{
              fontWeight: 'bold',
              color:
                section.key === selectedSection.key
                  ? '#903df7'
                  : '#0F110C',
            }}
            onClick={() => dispatch(modifySection(section))}
          >
            {section.label}
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
