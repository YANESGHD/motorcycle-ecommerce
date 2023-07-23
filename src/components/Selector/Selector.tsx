import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { ButtonGroup, Button } from '@mui/material';
import { RootState, modifySection, resetProducts } from '@/store';
import { Section } from '@/interfaces';

export const Selector: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const { sections } = useSelector(
    (state: RootState) => state.section
  );
  const dispatch = useDispatch();

  const handleSectionSelection = (section: Section) => {
    dispatch(resetProducts());
    dispatch(modifySection(section));
  };

  return (
    <Container>
      <ButtonGroup color='secondary' variant='text'>
        {sections.map((section) => (
          <Button
            size='large'
            key={section.key}
            onClick={() => handleSectionSelection(section)}
          >
            <Link
              href={`/${section.key}`}
              key={section.key}
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color:
                  currentPath.includes(section.key) ? '#903df7' : '#0F110C',
              }}
            >
              {section.label}
            </Link>
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
