import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { ButtonGroup, Button } from '@mui/material';
import { sections } from '@/constants';

export const Selector: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Container>
      <ButtonGroup color='secondary' variant='text'>
        {sections.map((section) => (
          <Button
            size='large'
            key={section.key}
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
