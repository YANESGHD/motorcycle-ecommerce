import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import { Selector } from '../Selector';

export const Navbar: React.FC = () => {
  return (
    <AppBar
      position='static'
      sx={{ bgcolor: '#FFFFFF', padding: { xs: '0', md: '0 70px' } }}
    >
      <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href={'/motorcycles'}>
          <ImageContainer>
            <Image
              src='/simplimuv-logo.png'
              alt='Simplimuv Logo'
              width={120}
              height={25}
              layout='responsive'
            />
          </ImageContainer>
        </Link>

        <Selector />

        <div></div>
      </Toolbar>
    </AppBar>
  );
};

const ImageContainer = styled.div`
  width: 80px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) {
    width: 120px;
    height: 25px;
  }
`;
